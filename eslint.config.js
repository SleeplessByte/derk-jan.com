// @ts-check
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y-x";
import globals from "globals";
import tseslint from "typescript-eslint";

// Safari drops the list role of a list with `list-style: none`, which
// Tailwind's preflight sets on every list.
const listRoles = { ol: ["list"], ul: ["list"] };

export default defineConfig([
  globalIgnores(["dist/", ".astro/", ".netlify/"]),
  // These break the rules on purpose, many as examples in the accessibility
  // talks. Do not fix them.
  globalIgnores(
    [
      "src/components/AccessibleCardLink/Component.tsx",
      "src/components/ExternalLink.tsx",
      "src/components/Slide/AutoSlideFooter.tsx",
      "src/components/Toggle.tsx",
      "src/pages/talks/exercism-is-excellent/02.astro",
      "src/pages/talks/practical-solutions-for-accessible-components/31.astro",
      "src/pages/talks/practical-solutions-for-accessible-components/38/15-example.astro",
      "src/pages/talks/practical-solutions-for-accessible-components/46/15-example.astro",
      "src/pages/talks/practically-accessible-amsrb/index.astro",
      "src/talks/practically-accessible/01.tsx",
      "src/talks/practically-accessible/microsite/looks-fine.tsx",
      "src/talks/practically-accessible/microsite/screen-reader.tsx",
    ],
    "Broken on purpose",
  ),
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: { globals: globals.node },
  },
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  {
    // With type information, the Astro parser writes a temporary .tsx file
    // next to each component, which the dev server picks up.
    files: ["**/*.js", "**/*.mjs", "**/*.astro", "**/*.astro/*"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    files: ["**/*.astro"],
    rules: {
      // The frontmatter is TypeScript, which `astro check` checks.
      ...tseslint.configs.eslintRecommended.rules,
      "astro/jsx-a11y/no-redundant-roles": ["error", listRoles],
    },
  },
  {
    files: ["**/*.tsx"],
    extends: [jsxA11y.configs.recommended],
    rules: {
      "jsx-a11y-x/no-redundant-roles": ["error", listRoles],
    },
  },
  {
    files: ["**/*.astro", "**/*.tsx"],
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
