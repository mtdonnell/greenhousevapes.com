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

## The contact form does not work, and never did

`ContactPage` in `pages.compiled.js` submits with:

```js
onSubmit: e => { e.preventDefault(); setSent(true); }
```

It shows "We'll get back to you within one business day" and sends the message
nowhere — no fetch, no mailto, no backend. Netlify Forms never picked it up
either: Netlify detects forms by parsing static HTML at build time, and this
form is rendered by React, so it was invisible to that. The fields also have no
`name` or value binding, so there is nothing to submit even if a handler
existed. This is pre-existing, not a migration regression.

Worse than the form: `support@greenhousevapes.com` is published as a `mailto:`
on the same page, and **greenhousevapes.com has no MX records** — so mail to
that address bounces. Anyone who has emailed the shop has been silently lost.

Fixing both needs Cloudflare Email Routing on the zone (adds MX, forwards
`support@` to a real inbox). Until then the form is worse than no form, because
it claims a reply is coming.

## Known issues, not yet addressed

The site is a client-side React app: crawlers see only the `<noscript>` block,
not the rendered page. For a local business ranking on "vape shop near me" that
is the single biggest SEO problem here. The `Store` JSON-LD (both locations,
hours, `areaServed`) is well-built and should be preserved verbatim in any
rebuild. React is also loaded from unpkg.com on the critical path.
