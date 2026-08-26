// Pre-renders each page's React tree into its HTML file, so crawlers get the
// real page instead of the <noscript> stub. The browser bundle is untouched:
// the same components/*.compiled.js files are loaded here in a vm sandbox and
// in the browser via <script>, so there is no second copy of the truth.
//
// Why this is safe with the age gate: App renders
//   !ageOk && <AgeGate/>  ...alongside...  <main>{route content}</main>
// The gate is an overlay, not a wrapper, so the page content is always in the
// tree. Server-rendering with ageOk=false still emits the full page.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// route -> [html file, component name]
const PAGES = {
  home: ['index.html', 'Home'],
  products: ['products.html', 'Products'],
  about: ['about.html', 'About'],
  locations: ['locations.html', 'Locations'],
  rewards: ['rewards.html', 'Rewards'],
  faq: ['faq.html', 'FAQ'],
  contact: ['contact.html', 'Contact'],
};

// Load order matters: these are plain scripts sharing one global scope, and
// later files reference functions defined in earlier ones.
const BUNDLES = [
  'components/shell.compiled.js',
  'components/interactive.compiled.js',
  'components/home.compiled.js',
  'components/pages.compiled.js',
];

const MARK_OPEN = '<!--PRERENDER-->';
const MARK_CLOSE = '<!--/PRERENDER-->';

function makeSandbox(route) {
  // Minimal browser surface. Anything a component touches during render must
  // exist here; anything it touches on *mount* does not, since effects never
  // run under renderToStaticMarkup.
  const store = new Map();
  const noop = () => {};
  const sandbox = {
    React,
    console,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    },
    // Components read window.__ROUTE__/__ROUTES__ during render.
    window: {
      __ROUTE__: route,
      __ROUTES__: {
        home: '/', products: '/products', about: '/about',
        locations: '/locations', rewards: '/rewards',
        faq: '/faq', contact: '/contact',
      },
      matchMedia: () => ({ matches: false, addEventListener: noop, removeEventListener: noop }),
      addEventListener: noop,
      removeEventListener: noop,
      scrollTo: noop,
      IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
    },
    document: {
      documentElement: { setAttribute: noop, removeAttribute: noop },
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: noop,
      removeEventListener: noop,
      createElement: () => ({ style: {}, setAttribute: noop, appendChild: noop }),
      body: { appendChild: noop, removeChild: noop, style: {} },
    },
    navigator: { userAgent: 'prerender' },
  };
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  sandbox.IntersectionObserver = sandbox.window.IntersectionObserver;
  return vm.createContext(sandbox);
}

function loadComponents(route) {
  const ctx = makeSandbox(route);
  for (const rel of BUNDLES) {
    const code = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    vm.runInContext(code, ctx, { filename: rel });
  }

  // getStoreStatus() derives "Closed · opens 10am" from the clock. Baking that
  // into HTML that Cloudflare caches means a page rendered at 6am still says
  // "Closed" at noon — wrong for visitors and wrong for crawlers.
  //
  // Substitute a statement that is true at every hour. useStoreStatus resolves
  // this global at call time, so overriding it here is enough; on mount the
  // client re-renders with the real live status.
  ctx.getStoreStatus = () => ({ isOpen: false, label: 'Open 7 days' });

  return ctx;
}

// Must be idempotent: this runs before every deploy, on files that already
// contain a previous render. A naive /<div id="root">[\s\S]*?<\/div>/ is not —
// the lazy match stops at the FIRST </div> *inside* the injected markup and
// silently shreds the page on the second run.
function inject(html, markup) {
  const OPEN_TAG = '<div id="root">';
  const start = html.indexOf(OPEN_TAG);
  if (start === -1) throw new Error('no <div id="root"> found');

  const contentStart = start + OPEN_TAG.length;
  let end;

  const marked = html.indexOf(MARK_OPEN, contentStart);
  if (marked === contentStart) {
    // Already rendered: anchor on our own closing marker, not on any </div>.
    const closeMark = html.indexOf(MARK_CLOSE, marked);
    if (closeMark === -1) throw new Error('opening marker without closing marker');
    end = closeMark + MARK_CLOSE.length;
  } else {
    // First run: the div must be empty, or we would be discarding real markup.
    end = contentStart;
    if (!html.startsWith('</div>', contentStart)) {
      throw new Error('<div id="root"> is neither empty nor previously rendered');
    }
  }

  return html.slice(0, contentStart) + MARK_OPEN + markup + MARK_CLOSE + html.slice(end);
}

// ---------------------------------------------------------------------------
// Cache-busting.
//
// components/*.compiled.js and the CSS have no hash in their filenames, and
// _headers caches them for an hour. That means a visitor can get freshly
// deployed HTML alongside an hour-old bundle. It is not hypothetical: adding
// the /products route shipped HTML for a route the cached app.compiled.js had
// never heard of, and the page rendered completely blank.
//
// Stamping each asset URL with a hash of its own contents ties the HTML to the
// exact build it was rendered against. Unchanged files keep their URL and stay
// cached; changed files get a new URL and are fetched immediately.
// ---------------------------------------------------------------------------
function assetVersion(rel) {
  const buf = fs.readFileSync(path.join(ROOT, rel));
  return crypto.createHash('sha256').update(buf).digest('hex').slice(0, 8);
}

function stampAssets(html) {
  return html.replace(
    /(src|href)="\/(components\/[A-Za-z0-9._-]+\.js|vendor\/[A-Za-z0-9._-]+\.js|[A-Za-z0-9._-]+\.css)"/g,
    (whole, attr, rel) => {
      const abs = path.join(ROOT, rel);
      if (!fs.existsSync(abs)) return whole;
      return `${attr}="/${rel}?v=${assetVersion(rel)}"`;
    }
  );
}

let failed = 0;
for (const [route, [file, componentName]] of Object.entries(PAGES)) {
  const target = path.join(ROOT, file);
  try {
    const ctx = loadComponents(route);
    const Page = ctx[componentName];
    if (typeof Page !== 'function') {
      throw new Error(`component ${componentName} not found in bundle scope`);
    }
    const Nav = ctx.Nav;
    const Footer = ctx.Footer;

    // Mirrors App() minus the AgeGate overlay and Tweaks panel, both of which
    // are client-only chrome and must not be baked into cached HTML.
    const tree = React.createElement(
      React.Fragment,
      null,
      Nav ? React.createElement(Nav, { route }) : null,
      React.createElement('main', { className: 'fade-up' }, React.createElement(Page, null)),
      Footer ? React.createElement(Footer, null) : null
    );

    const markup = renderToStaticMarkup(tree);
    const html = fs.readFileSync(target, 'utf8');

    // Strip any previous ?v= stamp first so re-runs don't accumulate them.
    const bare = html.replace(
      /((?:src|href)="\/(?:components|vendor)\/[A-Za-z0-9._-]+\.js|(?:src|href)="\/[A-Za-z0-9._-]+\.css)\?v=[0-9a-f]+"/g,
      '$1"'
    );
    const out = stampAssets(inject(bare, markup));

    // Guard against stray markup living OUTSIDE #root, which inject() cannot
    // see. products.html was first built by copying about.html and stripping
    // its render with a lazy /<div id="root">.*?<\/div>/ — that stopped at the
    // first </div> inside the markup and left most of the About page in the
    // file, so the deployed page showed two navs, two footers and the wrong
    // content. Exactly one nav and one footer per page, always.
    const navs = (out.match(/<nav class="nav"/g) || []).length;
    const feet = (out.match(/<footer/g) || []).length;
    if (navs !== 1 || feet !== 1) {
      throw new Error(`expected 1 nav and 1 footer, found ${navs} nav / ${feet} footer — stray markup outside #root?`);
    }

    fs.writeFileSync(target, out);
    console.log(`  ok  ${file.padEnd(16)} ${markup.length.toLocaleString()} bytes of markup`);
  } catch (err) {
    failed++;
    console.error(`  FAIL ${file}: ${err.message}`);
  }
}

process.exit(failed ? 1 : 0);
