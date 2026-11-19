# Agent instructions

When you touch a file, you are responsible for cleaning up the lint errors in it.

These rules also apply to sub-agents. When you brief a sub-agent, include the rules that apply to its task.

## Writing for readers

Your output will be read by non-native practitioner-scholars: use simple syntax and connective language, precise domain terms.

## Code

- JavaScript, TypeScript and CSS use only Baseline widely available features. Check a feature in MDN browser-compat-data before you use it, and say so when a feature has only just become widely available.
- Rely on native CSS features rather than SASS or PostCSS. A native feature with a fallback is fine: an older CSS feature behind `@supports`, or a fallback in JS when the feature is missing.
- Comments explain _why_, never _how_. Do not write a comment that only repeats a name.
- No fallbacks for states that cannot happen. Before you remove a guard, check which states the data can really reach (for example zero items, one item, or a tree with only its root), and test those states.
- Copying code once is fine; make an abstraction at the third copy.
- Optimise for maintainability: concise, but not vague or overly compact.
- Format every edited file that Prettier supports (CSS, HTML, JavaScript, TypeScript, Markdown, …) with the project's format script. Prettier skips git-ignored files, so pass `--ignore-path .prettierignore` for those. Lint templates with the project's template linter.

## CSS

- The block root is often `[data-component="..."]`; for a non-component, it is `.component-name`.
- Elements are plain classes, reached by nesting.
- Modifiers are `.--{name}` on the same element.
- Generic theme classes use the same shape (`<button class="button --primary">`).
- No BEM.
- Always nest modifiers, so that a new rule on the unmodified element causes less churn.
- Do not name an element after a utility class of the project's CSS framework (for example Tailwind's `grid`, `hidden` or `ring`).
- Every base colour is a custom property. A derived colour, such as a hover colour, may be a custom property that refers to a base one.

```css
[data-component="grid-view"] {
  display: grid;

  & > .item {
    padding: 1rem;

    &.--featured {
      border-inline-start: 4px solid var(--wp--preset--color--accent);
    }
  }

  & .deep-element {
    &.--primary {
      margin: 1rem 0;
    }
  }
}
```

## Accessibility

The target is at least WCAG 2.1 AA. Pay special attention to:

- Semantic elements first: buttons for actions, links for navigation, `fieldset` and `legend` for groups of controls, a `<label for>` for every input, and `aria-live="polite"` for result counts.
- No `aria-label`, because many translation tools skip it. Use `aria-labelledby` that points to an element with a unique id and the class `sr-only`. Generate unique ids with the framework's helper (for example `wp_unique_id()` in PHP, `useInstanceId` in the block editor). Make sure the page loads the stylesheet that defines `.sr-only` (in a WordPress block: `"style": [ "don-core-base", "file:./view.css" ]`).
- A decorative SVG must have `aria-hidden="true"`, for example when it is next to visible text. An icon-only SVG must have `role="graphics-symbol"` and a translatable `<title>` as its first child.
- Visible focus, targets of at least 24×24 px, and respect for `prefers-reduced-motion`. A smaller target is fine when the page offers an accessible alternative with the same function.
- A pattern is a valid replacement for colour (WCAG 1.4.1), but each pattern needs at least 3:1 contrast against its own fill.

## Reporting

- List the exact URLs you tested, as links.
- For a UI change, take screenshots before and after, in light and dark mode, and link every one. When the user has a live view, crop the screenshots to what changed. Take one viewport size, unless the layout changes in a fundamental way between sizes. Delete the screenshots when the stage is done.
