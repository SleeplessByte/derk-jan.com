# Local development

## The dev server

- The user usually runs `pnpm dev` themselves, on http://localhost:4321. Use that server, and do not stop or replace it without asking.
- Astro 7 does not start a second `astro dev` in the same project. For an extra check, build instead (see below).
- The Netlify adapter loads Netlify's local emulation (blobs, redirects, headers) into `astro dev`. It reads `netlify.toml` only when it starts, so a change to the redirects needs a restart.
- Astro restarts itself when `astro.config.mjs` changes, but not when a file that the config imports changes, such as a remark plugin. `touch astro.config.mjs` makes it reload.
- `MissingBlobsEnvironmentError` on routes that render per request (`src/middleware.ts` uses Netlify Blobs, also for `/_image`): on a restart, Vite creates the new server before it closes the old one, and the old Netlify emulation's stop removes the blobs context of the new one.
  - [`patches/@netlify__vite-plugin@3.0.1.patch`](../patches/@netlify__vite-plugin@3.0.1.patch) stops the old emulation first. Node loads the plugin once, so a change to the patch needs a manual restart. To test it without the user's server, create a Vite server with only the Netlify plugin on another port, call `server.restart()`, and then `getStore()`.
  - After `node_modules` is re-linked (`pnpm add`, worktrees), Astro does not restart, and the error can still appear: ask the user to restart the dev server.

## Building

- `pnpm build` runs `astro check && astro build`, so a type error stops the deploy.
- On Windows, the build failed with `EPERM: operation not permitted, symlink … sharp …`, and the later hooks, such as the sitemap, did not run. The Netlify adapter recreates pnpm's symbolic links in `.netlify/v1/functions/ssr/`, and only administrators (or Developer Mode) may create them. [`patches/@astrojs__internal-helpers@0.13.2.patch`](../patches/@astrojs__internal-helpers@0.13.2.patch) makes a junction or a copy instead, only on Windows and only after `EPERM`.
- Both patches belong to their exact version. When pnpm reports that a patch no longer applies, check whether the new version still needs it.
- To check built pages without the dev server, serve `dist/` with a small static Node server on another port.

## Formatting and linting

- `pnpm format <files>` (Prettier) and `pnpm lint [files]` (ESLint). Without a file, `pnpm lint` checks the whole repo.
- Many older files, mostly the talks, are not formatted with Prettier. Format only the files you edit, so that a diff shows only your change.
- [`eslint.config.js`](../eslint.config.js) has the recommended rules of ESLint and typescript-eslint for all code. `.ts` and `.tsx` files get the rules that need type information (`projectService`); `.astro` files and plain JavaScript do not.
  - With type information, the Astro parser writes a temporary `.tsx` file next to each component, which the dev server picks up. `astro check` checks the types in the frontmatter instead.
  - So far, the problems of these rules are fixed only in `src/pages/prototypes/`, `src/pages/events/`, `src/pages/recipes/` and `src/components/Recipes/` (November 2026). Elsewhere, `pnpm lint` still reports about 40.
- The Astro templates and the React components also get the jsx-a11y rules, plus a ban on `aria-label` (AGENTS.md). They use the fork `eslint-plugin-jsx-a11y-x`, because the original does not support ESLint 10.
  - `role="list"` on `<ol>` and `<ul>` is allowed on purpose: Safari drops the list role when a list has `list-style: none`, which Tailwind's preflight sets.
  - The ignore list "Broken on purpose" holds files that break the rules deliberately, many as examples in the accessibility talks. Do not fix them. Add a file there only when the user confirms it is deliberate.

## Comparing with an earlier version

- Never link a git worktree's `node_modules` to the main one. `pnpm exec` in the worktree re-links the shared packages through the worktree path, so removing the worktree breaks the main `node_modules`. The repair is `pnpm install --offline --frozen-lockfile`, followed by a restart of the dev server.
- Give a worktree its own `pnpm install --offline`, or compare against the live site, sparingly.

## Verifying in a browser

[`src/tools/cdp.mjs`](../src/tools/cdp.mjs) drives headless Chrome through the DevTools Protocol: `launch()`, then `goto`, `eval`, `click`, `key`, `media` and `shot`, and `close()`. Write the scripts that use it and their screenshots in a scratch folder, not in the repo. Its browser profiles live in `%TEMP%/derk-jan-com-cdp/`, and `close()` and the next `launch()` remove them.

Useful techniques:

- `Emulation.setTouchEmulationEnabled` makes `(hover: none)` match, for UI that only phones and tablets see.
- `launch({ scrollbars: true })` shows classic scrollbars, as on Windows, to measure layout shifts (`innerWidth - documentElement.clientWidth`). Screenshots leave out the scrollbar's gutter. In Chrome, `100vw` leaves out a gutter reserved by `scrollbar-gutter: stable`.
- CSS `zoom` on the root element (0.9, 1.25) reproduces bugs at the browser zoom levels that many Windows users have.
- `Page.addScriptToEvaluateOnNewDocument` can override `Date` (countdowns, past-tense text) or stub `Navigator.prototype.share`.
- `Emulation.setCPUThrottlingRate` (4×, 6×, 12×) tests the quality steps of animations.
- `Emulation.setEmulatedMedia` sets `prefers-color-scheme` and `prefers-reduced-motion`.
- The `Fetch` domain can serve a broken file, for example an audio file that does not decode, to test error paths.
- A second tab hides the page, as when a visitor switches tabs or apps: `Target.createTarget` fires `visibilitychange`, and `Target.closeTarget` with `Page.bringToFront` shows the page again.
- To see a state that lasts one frame, hold the animation that ends it: wrap the element's `animate`, `pause()` the animation it returns, take the screenshot, then `play()` it.
- A reloaded tab keeps its scroll position, but a test page starts at the top. Set `document.documentElement.scrollTop` by hand; it also works under `overflow: hidden`.

For motion, record a video rather than screenshots: `startRecording()` and `stopRecording(path)` write an MP4 with ffmpeg (on Windows, through scoop). Every frame keeps its real duration, so a stutter shows. `ffmpeg -i <video> -vf freezedetect=n=0.0005:d=0.08 -f null -` lists where the picture stands still.

Pitfalls:

- The `clip` of `shot()` is in document coordinates: add `scrollY` to a `getBoundingClientRect()` top.
- The site scrolls smoothly, so use `scrollIntoView({ behavior: "instant" })` before you measure or click.
- With `touch: true`, `click()` did not return (November 2026). Use `element.click()` in `eval`.
- A recording of the Gay Café opener freezes for about 0.2 s, 0.3 s into every reveal except the fade. The frame times without recording show no stall there, so it probably comes from the screencast.
