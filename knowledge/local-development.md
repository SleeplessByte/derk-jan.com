# Local development

## The dev server

- The user usually runs `pnpm dev` themselves, on http://localhost:4321. Use that server, and do not stop or replace it without asking.
- Astro 7 refuses a second `astro dev` in the same project ("Another astro dev server is already running"). For an extra check, build instead (see below).
- The Netlify adapter loads Netlify's local emulation into `astro dev`: blobs, redirects, headers and more. It reads `netlify.toml` only when it starts, so after a change to the redirects the dev server needs a restart.
- `src/middleware.ts` uses Netlify Blobs on every route that is not pre-rendered, `/_image` included. Those routes fail with `MissingBlobsEnvironmentError` after the server restarts itself (an edit of `astro.config.mjs`) or after `node_modules` is re-linked (`pnpm add`, worktrees). Ask the user to restart the dev server.

## Building

- `pnpm build` runs `astro check && astro build`, so a type error stops the deploy.
- On Windows the build ends with `EPERM: operation not permitted, symlink … sharp …` in the Netlify adapter's `astro:build:done` hook, because Windows needs extra rights to create that symlink. The pages in `dist/` are written before this step, and Netlify's Linux build does not have the problem.
- To check built pages without the dev server, serve `dist/` with a small static Node server on another port.

## Formatting and linting

- `pnpm format <files>` (Prettier) and `pnpm lint [files]` (ESLint). Both take file names; without one, `pnpm lint` checks the whole repo.
- [`eslint.config.js`](../eslint.config.js) lints the Astro templates: `eslint-plugin-astro` with its jsx-a11y rules, plus a ban on `aria-label` (AGENTS.md). It uses the fork `eslint-plugin-jsx-a11y-x`, because the original does not support ESLint 10.

## Comparing with an earlier version

- Never link a git worktree's `node_modules` to the main one. `pnpm exec` in the worktree re-links the shared packages through the worktree path, so removing the worktree breaks the main `node_modules`. The repair is `pnpm install --offline --frozen-lockfile`, followed by a restart of the dev server.
- Give a worktree its own `pnpm install --offline`, or compare against the live site, sparingly.

## Verifying in a browser

[`src/tools/cdp.mjs`](../src/tools/cdp.mjs) drives headless Chrome through the DevTools Protocol: `launch()`, then `goto`, `eval`, `click`, `key`, `media` and `shot`, and `close()`. Write the scripts that use it and their screenshots in a scratch folder, not in the repo. Its browser profiles live in `%TEMP%/derk-jan-com-cdp/`; `close()` removes its own, and the next `launch()` removes what a crashed script left behind.

These techniques proved useful:

- `Emulation.setTouchEmulationEnabled` makes `(hover: none)` match, for UI that only phones and tablets see.
- CSS `zoom` on the root element (0.9, 1.25) reproduces bugs that appear at the browser zoom levels many Windows users have.
- A `Date` override through `Page.addScriptToEvaluateOnNewDocument` tests countdowns and past-tense text. Stub `Navigator.prototype.share` the same way to test the share sheet.
- `Emulation.setCPUThrottlingRate` (6×, 12×) tests the quality steps of animations.
- `Emulation.setEmulatedMedia` sets `prefers-color-scheme` and `prefers-reduced-motion`.

Pitfalls:

- The `clip` of `shot()` is in document coordinates: add `scrollY` to a `getBoundingClientRect()` top.
- The site scrolls smoothly, so use `scrollIntoView({ behavior: "instant" })` before you measure or click.
