# Local development

## The dev server

- The user usually runs `pnpm dev` themselves, on http://localhost:4321. Use that server, and do not stop or replace it without asking.
- Astro 7 refuses a second `astro dev` in the same project ("Another astro dev server is already running"). For an extra check, build instead (see below).
- The Netlify adapter loads Netlify's local emulation into `astro dev`: blobs, redirects, headers and more. It reads `netlify.toml` only when it starts, so after a change to the redirects the dev server needs a restart.
- `src/middleware.ts` uses Netlify Blobs on every route that is not prerendered, `/_image` included. When the emulation is broken, for example after `node_modules` was re-linked, those routes fail with `MissingBlobsEnvironmentError`. A restart of the dev server fixes it.
- An edit of `astro.config.mjs` makes Astro restart the dev server by itself. After such a restart, `/_image` failed with `MissingBlobsEnvironmentError`, so ask the user to restart the server.

## Building

- `pnpm build` runs `astro check && astro build`, so a type error stops the deploy.
- On Windows the build ends with `EPERM: operation not permitted, symlink … sharp …` in the Netlify adapter's `astro:build:done` hook, because Windows needs extra rights to create that symlink. The pages in `dist/` are written before this step, and Netlify's Linux build does not have the problem.
- To check built pages without the dev server, serve `dist/` with a small static Node server on another port.

## Formatting and linting

- `pnpm format <files>` runs Prettier on those files; `pnpm format .` formats the whole repo.
- `pnpm lint <files>` runs ESLint on them; `pnpm lint` alone lints the whole repo. [`eslint.config.js`](../eslint.config.js) lints the Astro templates, with the recommended rules of `eslint-plugin-astro` and its jsx-a11y rules, and forbids `aria-label` (see AGENTS.md).
- `eslint-plugin-astro` 3 needs ESLint 10, and `eslint-plugin-jsx-a11y` only supports ESLint up to 9, so the project uses the fork `eslint-plugin-jsx-a11y-x`. The Astro plugin finds either one by itself.
- `pnpm add` re-links `node_modules`; after that, `/_image` in the running dev server failed with `MissingBlobsEnvironmentError` until the server was restarted.

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
