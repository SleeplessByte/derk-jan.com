// @ts-check
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";

// Lints the Astro templates, with the accessibility rules of jsx-a11y.
export default defineConfig([
  globalIgnores(["dist/", ".astro/", ".netlify/"]),
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='aria-label']",
          message:
            "Many translation tools skip aria-label. Use aria-labelledby with an element of the class sr-only.",
        },
      ],
    },
  },
]);
