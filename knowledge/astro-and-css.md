# Astro and CSS

## Astro

- Child components can read the page's `Astro.params`.
- `Astro.preferredLocale` and the `Accept-Language` header only work on pages that render per request, not on prerendered pages.
- A `?raw` import (`import font from "./font.svg?raw"`) reads a file at build time; the browser never loads it.
- With the ClientRouter:
  - `astro:before-swap` has `sourceElement` (for example the clicked link) and `newDocument`, so a listener can change the next page before it paints.
  - Inline scripts with `data-astro-rerun` run again _after_ the `astro:after-swap` listeners. An element that such a listener removed is already gone.
  - `transition:persist` keeps an element across a navigation, for example audio that is playing.
- Whitespace:
  - Astro can drop the whitespace between elements. Write `{" "}` where a space must stay.
  - Prettier can wrap an inline element onto its own line, which adds a space, for example before a full stop. A bare `<!-- prettier-ignore -->` before the element prevents this; with any more text in the comment, Prettier ignores it.
- `as const satisfies { … }[]` on an array of objects checks for extra properties, so the type must list every field.
- Shiki's `codeToHtml` puts `tabindex="0"` on its `<pre>` by default. When another element scrolls the code (as in `src/components/Slide/SlideCode.tsx`), pass `tabindex: false`, or every code block becomes a Tab stop without a name.

## CSS

- Astro's scoped styles are not in a cascade layer, so they win over Tailwind's utilities.
- Tailwind only emits the theme variables that a utility somewhere on the site uses. `var(--shadow-sm)` in a component's style is empty, and `var(--color-zinc-500)` breaks as soon as the last `zinc-500` utility goes. In a component's `<style>`, write `@reference "../../styles/global.css";` and then `--theme(--shadow-sm inline)`, which puts the value itself into the CSS. See `src/components/Recipes/Share.astro`.
- The global link styles in `src/styles/imported.css` colour and underline every `a:link`. The class `unstyled-link` opts out. There is no `.link` class.
- A modifier that sets `display`, such as `.--opener { display: flex }`, is more specific than a media query that hides the root, such as `@media (hover: hover) { display: none }`. Include the modifier in the hiding rule.
- An `IntersectionObserver` with `threshold: 1` may never fire at some zoom levels, especially for a rotated element: the visible ratio stops at 0.999. Use a negative `rootMargin` with the default threshold instead.
