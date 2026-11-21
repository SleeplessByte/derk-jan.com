# Agent instructions

When you touch a file, you are responsible for cleaning up the lint errors in it.
If sensible linters are missing, suggest them.

These rules also apply to sub-agents. When you brief a sub-agent, include the rules that apply to its task.

The live site is https://derk-jan.com. You can use it, but be slightly conservative with bandwidth so no unnecessary visits. No form spamming on prod.

This project uses `pnpm` and astro.

In your final outputs/plans, when you are referring to local files, link them (line number when applicable). In your final outputs/plans also link to the localhost path if it's a served page (e.g. http://localhost:4321/about for pages/about.astro).

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
- After you write code, run the type checker (`pnpm check`) and fix every error in the files you touched. Editor diagnostics are not enough, because they only cover open files.
- Always put the body of an `if` in braces on its own line, even when Prettier accepts one line. Do not use `&&`, `||`, a ternary, or a logical assignment with a call (`??=`, `||=`) as a statement in place of an `if`.

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
- No `aria-label`, because many translation tools skip it. Use `aria-labelledby` that points to an element with a unique id and the class `sr-only`. Generate unique ids with the framework's helper (for example `wp_unique_id()` in PHP, `useInstanceId` in the WordPress block editor). Make sure the page loads the stylesheet that defines `.sr-only`.
- A decorative SVG must have `aria-hidden="true"`, for example when it is next to visible text. An icon-only SVG must have `role="graphics-symbol"` and a translatable `<title>` as its first child.
- Visible focus, targets of at least 24×24 px, and respect for `prefers-reduced-motion`. A smaller target is fine when the page offers an accessible alternative with the same function.
- A pattern is a valid replacement for colour (WCAG 1.4.1), but each pattern needs at least 3:1 contrast against its own fill.

## Reporting

- List the exact URLs you tested, as links.
- For a UI change, take screenshots before and after, in light and dark mode, and link every one. When the user has a live view, crop the screenshots to what changed. Take one viewport size, unless the layout changes in a fundamental way between sizes. Delete the screenshots when the stage is done.

## File processing & other unavailable software

- docker on WSL is available
- first check what's already downloaded (images)
- you can use that
- you can add new images (plan for this)
- do not reach into sub containers from other projects
- always compose a container for the project for easy tracking what's using what (so `derk-jan-com`)
- clean up after the project no longer requires it (plan for this)
