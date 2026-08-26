# greenhousevapes.com

Static site for Greenhouse Vapes (Festus & De Soto, MO). Hosted on Cloudflare
Workers static assets. No build step — the repo root is what gets served.

## Deploy

```
npx wrangler deploy
```

`.assetsignore` keeps build inputs (`components/*.jsx`), the Netlify archive and
repo docs out of the deployed asset store.

## Migrated from Netlify — what changed and why

The Netlify deploy is archived unmodified in `_netlify-original/`. Five things
had to change for the site to work on Cloudflare at all:

1. **Script casing.** Every page referenced `components/Shell.compiled.js`
   (capitalised) while the files on disk are lowercase. Netlify resolved this
   case-insensitively; Cloudflare's asset store does not. Left alone, React
   would never load and every page would render blank. All refs are now
   lowercase and root-absolute.

2. **`greenhouse vapes.html`.** A byte-identical duplicate of `index.html` with
   a space in the filename. Every subpage linked "home" to it via
   `Greenhouse%20Vapes.html` — a 404 on Cloudflare. Removed; those links now
   point at `/`.

3. **Pretty URLs.** Netlify's Pretty URLs post-processor rewrote
   `href="about.html"` to `href="/about"` *at serve time*, so the source and the
   served HTML never matched. Cloudflare has no such step, so the pretty URLs
   are now in the source, with `html_handling: "drop-trailing-slash"` serving
   them.

4. **Canonical URLs.** Every page canonicalised to `/about.html` while Google
   was crawling `/about` — and both returned 200, so the site had two live URLs
   per page. Canonicals, `og:url` and `sitemap.xml` all use the pretty form now,
   and `_redirects` 301s the `.html` form to it.

5. **The React route table.** `window.__ROUTES__` in `app.compiled.js` — the
   table the in-app nav actually uses — still pointed at `.html` files,
   including `Greenhouse%20Vapes.html`, the duplicate removed in (2). Grepping
   the HTML never catches this: in compiled React these are props (`href:`),
   not attributes (`href=`). Fixed in the compiled output and in `shell.jsx`.

## The CSP is new

Netlify served no `Content-Security-Policy` on this site. The one in `_headers`
is introduced by this migration, so anything it blocks is a regression *we*
caused. Every source in it was traced to a real reference first — in particular
`frame-src https://www.google.com`, without which the store maps that
`StoreMap()` embeds on /locations silently go blank. If a page misbehaves after
a deploy, switch the header to `Content-Security-Policy-Report-Only`, confirm
against the browser console, then promote it back.

## The contact form (fixed 2026-08-25)

It used to submit with:

    onSubmit: e => { e.preventDefault(); setSent(true); }

It showed "We will get back to you within one business day" and sent the
message nowhere. Netlify Forms never picked it up either - Netlify detects
forms by parsing static HTML at build time, and this form is rendered by React,
so it was invisible. The fields also had no name attributes, so there was
nothing to submit even if a handler had existed.

Now: the fields have names, the form POSTs JSON to /api/contact, and
src/index.js emails it via the send_email binding. A hidden honeypot field
(company) drops bots, and CONTACT_LIMIT rate-limits by IP.

Mail goes to matthewtdonnell@gmail.com, NOT to support@greenhousevapes.com.
The binding can only send to a *verified Email Routing destination*, and
support@ cannot be one: greenhousevapes.com MX points at Email Routing, so its
verification mail would loop back into the router. Mail to support@ forwards to
the same inbox anyway. destination_address pins the binding to that single
recipient, so the endpoint cannot be abused to mail arbitrary people.

Note for future edits: Reply-To must be a mimetext Mailbox instance, not a
string. A string throws MIMETEXT_INVALID_HEADER_VALUE, which reaches the
browser as an opaque 1101 "Worker threw an exception".

### Editing the React components

components/*.jsx are the source; the browser loads components/*.compiled.js.
Recompile with:

    npx babel components/pages.jsx -o components/pages.compiled.js

babel.config.json pins the classic runtime and non-minimal jsesc so output
matches the original bundler. Verified by recompiling the pre-existing .jsx and
diffing against the shipped .compiled.js - identical apart from one attribute
ordering, meaning the two were already slightly out of sync upstream.

## Pre-rendering (the SEO fix)

The site is a client-rendered React app, so crawlers used to receive only the
<noscript> stub - the single biggest SEO problem for a business ranking on
"vape shop near me". `npm run build` fixes that: build/prerender.mjs loads the
same components/*.compiled.js the browser loads, in a Node vm sandbox with a
minimal browser surface, renders each route with renderToStaticMarkup, and
injects the result into that page's <div id="root">.

Result: every page ships ~1,600-4,200 characters of real crawlable text instead
of a stub. The browser bundle is untouched, so there is no second copy of the
truth - the same compiled files serve both.

Deploy with `npm run deploy`, which builds first. Running plain `wrangler
deploy` still works but ships whatever was last built.

Three things that matter if you touch this:

- **The age gate does not block it.** App renders `!ageOk && <AgeGate/>`
  *alongside* `<main>`, not wrapping it, so the page content is always in the
  tree even with ageOk false. If that ever becomes a wrapper, pre-rendering
  silently starts emitting an age modal and nothing else.
- **Nothing time-dependent may be baked in.** getStoreStatus() derives
  "Closed - opens 10am" from the clock; cached HTML rendered at 6am would still
  say Closed at noon. prerender.mjs overrides it with "Open 7 days", true at
  every hour, and the client swaps in live status on mount. Any future
  time-based or personalised render needs the same treatment.
- **inject() must stay idempotent.** It runs on files that already contain a
  render. The obvious `/<div id="root">[\s\S]*?<\/div>/` is wrong: the lazy
  match stops at the first </div> *inside* the injected markup and shreds the
  page on the second run. It anchors on the PRERENDER comment markers instead.

React 18.3.1 is vendored in vendor/ rather than loaded from unpkg. That removes
a third-party DNS+TLS handshake from the critical path and let the CSP drop
its third-party script host entirely.

## Asset versioning (do not remove)

`build/prerender.mjs` stamps every `components/*.js`, `vendor/*.js` and `*.css`
URL with `?v=<hash-of-that-file>`, and `_headers` makes HTML always revalidate.

This is not cosmetic. Those bundles have no hash in their filenames and are
cached for an hour, so before this existed a visitor could receive freshly
deployed HTML together with an hour-old bundle. Adding /products did exactly
that: the new HTML named a route the cached `app.compiled.js` had never heard
of, and the page rendered blank. Stamping ties each page to the exact build it
was rendered against; unchanged files keep their URL and stay cached.

The stamp is stripped and reapplied on every build, so re-runs do not
accumulate query strings.

## Adding a page

1. Write the component in `components/pages.jsx` and add it to the
   `Object.assign(window, {...})` export at the bottom.
2. Add the route to `window.__ROUTES__` **and** a `route === "..."` branch in
   `components/app.compiled.js` (that file has no .jsx source - edit it directly).
3. Add the nav entry in `components/shell.jsx`.
4. Create the HTML shell. **Copy an existing page and strip its render by
   anchoring on the `<!--PRERENDER-->` / `<!--/PRERENDER-->` markers** - a lazy
   `/<div id="root">.*?<\/div>/` stops at the first `</div>` inside the markup
   and leaves most of the copied page in the file. That shipped once: /products
   went live showing two navs, two footers and the About page's content.
   prerender.mjs now fails the build if a page ends up with more than one nav
   or footer.
5. Register it in `PAGES` in `build/prerender.mjs`, and add it to `sitemap.xml`
   and `_redirects`.

## Known issues, not yet addressed

Design overhaul and content depth are still outstanding - pre-rendering
addressed SEO only. Product/brand data in `BrandExplorer` (interactive.jsx) is
whatever was already published; it has not been checked against real inventory.
