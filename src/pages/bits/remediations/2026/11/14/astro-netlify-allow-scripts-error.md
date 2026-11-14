# Astro dev incompatible with netlify vite plugin

When starting Astro in dev-mode when using the official netlify vite plugin, there is an error:

```text
error: unexpected argument '--allow-scripts' found
```

A bit later you see:

```text
22:06:06 [ERROR] [UnhandledRejection] Astro detected an unhandled rejection. Here's the stack trace:
Error: Could not establish a connection to the Netlify Edge Functions local development server
    at EdgeFunctionsHandler.waitForDenoServer (file:///path/to/@netlify+edge-functions-dev@2.0.8/node_modules/@netlify/edge-functions-dev/dist/node/main.js:317:15)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async EdgeFunctionsHandler.initialize (file:///path/to/@netlify+edge-functions-dev@2.0.8/node_modules/@netlify/edge-functions-dev/dist/node/main.js:277:7)
  Hint:
    Make sure your promises all have an `await` or a `.catch()` handler.
  Error reference:
    https://docs.astro.build/en/reference/errors/unhandled-rejection/
  Stack trace:
    at /path/to/@netlify+edge-functions-dev@2.0.8/node_modules/@netlify/edge-functions-dev/dist/node/main.js:317:15
    [...] See full stack trace in the browser, or rerun with --verbose.
```

## Environment

- `astro`: 7.4.12
- `@netlify/vite-plugin`: 3.0.1
- `@astrojs/netlify`: 8.2.14 (optional)

## Mitigation

Until [netlify/primitives#790](https://github.com/netlify/primitives/pull/790) is merged and released.

In `astro.config.mjs`:

```ts
{
  // [...]
  vite: {
    plugins: [
      tailwindcss(),
      netlify({
        edgeFunctions: { enabled: Boolean(process.env.NETLIFY) },
      }),
    ],
  },
}
```

However, if you are using the `netlify` adapter, instead use:

```ts
{
  // [...]
  adapter: netlify({
    devFeatures: {
      environmentVariables: true,
      images: true,
      edgeFunctions: false,
    },
  }),

  // [...]
}
```
