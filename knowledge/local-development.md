# Local development

## The dev server

- The user usually runs `pnpm dev` themselves, on http://localhost:4321. Use that server, and do not stop or replace it without asking.
- Astro 7 refuses a second `astro dev` in the same project ("Another astro dev server is already running"). For an extra check, build instead (see below).
- The Netlify adapter loads Netlify's local emulation into `astro dev`: blobs, redirects, headers and more. It reads `netlify.toml` only when it starts, so after a change to the redirects the dev server needs a restart.
- Astro restarts itself when `astro.config.mjs` changes, but not when a file that the config imports changes, such as a remark plugin. The MDX compiler keeps the plugin it loaded, so the pages still use the old one. `touch astro.config.mjs` makes Astro reload the config.
- `src/middleware.ts` uses Netlify Blobs on every route that is not pre-rendered, `/_image` included. Those routes failed with `MissingBlobsEnvironmentError` after the server restarted itself (an edit of `astro.config.mjs`).
  - The cause: on a restart, Vite creates the new server before it closes the old one. Netlify's Vite plugin stops its emulation when the old server closes, and that stop restores the environment from before the old start, which removes the blobs context of the new emulation.
  - [`patches/@netlify__vite-plugin@3.0.1.patch`](../patches/@netlify__vite-plugin@3.0.1.patch) stops the old emulation before the new one starts. Node loads the plugin only once, so a change to the patch takes effect after a manual restart of the dev server.
  - To test the patch without the user's dev server, create a Vite server with only the Netlify plugin on another port, call `server.restart()`, and then call `getStore()`.
  - The error was also seen after `node_modules` was re-linked (`pnpm add`, worktrees). Astro does not restart for that, so the patch may not help there: ask the user to restart the dev server.
  - The patch belongs to that exact version, like the one in [Building](#building).

## Building

- `pnpm build` runs `astro check && astro build`, so a type error stops the deploy.
- At the end of a build, the Netlify adapter copies the server function's dependencies into `.netlify/v1/functions/ssr/` and recreates pnpm's symbolic links there. Windows only lets administrators (or Developer Mode) create symbolic links, so this failed with `EPERM: operation not permitted, symlink … sharp …`, and the later hooks, such as the sitemap, did not run.
  - [`patches/@astrojs__internal-helpers@0.13.2.patch`](../patches/@astrojs__internal-helpers@0.13.2.patch) makes a junction for a folder instead (no rights needed) and copies a file, only on Windows and only after `EPERM`. Netlify's Linux build is unchanged.
  - The patch belongs to that exact version. When Astro updates `@astrojs/internal-helpers`, pnpm reports that the patch no longer applies: check whether the new version still needs it.
- To check built pages without the dev server, serve `dist/` with a small static Node server on another port.

## Formatting and linting

- `pnpm format <files>` (Prettier) and `pnpm lint [files]` (ESLint). Both take file names; without one, `pnpm lint` checks the whole repo.
- [`eslint.config.js`](../eslint.config.js) lints the Astro templates and the React components (`.tsx`) with the jsx-a11y rules, plus a ban on `aria-label` (AGENTS.md). It uses the fork `eslint-plugin-jsx-a11y-x`, because the original does not support ESLint 10.
  - `role="list"` on `<ol>` and `<ul>` is allowed on purpose: Safari drops the list role when a list has `list-style: none`, which Tailwind's preflight sets.
  - The ignore list "Broken on purpose" holds files that break the rules deliberately, many as examples in the accessibility talks. Do not fix them. Add a file there only when the user confirms it is deliberate.

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
