# Netlify

## Redirects

- Netlify's docs show 301, 302, 404 and 200 as status codes. They call 307 "currently unsupported" and do not mention 303 or 308. For a page load (a GET), 302 and 307 behave the same, and so do 301 and 308.
- A rule is skipped when a file exists at its `from` path, unless the rule has `force = true`.
- Language conditions are written as `conditions = {Language = ["nl"]}`.
  - Netlify matches only the **first** language in `Accept-Language` and ignores the weights: `nl-NL,en` matches `nl`, but `en-GB,nl` does not.
  - A base code matches its regional variants: `nl` matches `nl-BE`.
  - The cookie `nf_lang` overrides the header.
  - The CDN caches one answer per language.
- To test rules without a deploy, use Netlify's own matcher from `node_modules`: `RedirectsHandler` in `node_modules/.pnpm/@netlify+redirects@*/node_modules/@netlify/redirects/dist/main.js`, with `configPath` set to `netlify.toml`. Its `match(request)` returns the status and the target.

## Forms

- Netlify Forms only detects forms in static HTML when it deploys. Keep pages with a form prerendered, or keep a static copy of the form somewhere.
- Two pages can post to the same form `name`; Netlify then keeps one list of submissions. Keep the field names and values the same on both pages, and language-neutral.
