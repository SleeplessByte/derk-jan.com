// @ts-check
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y-x";

// Safari drops the list role of a list with `list-style: none`, which
// Tailwind's preflight sets on every list.
const listRoles = { ol: ["list"], ul: ["list"] };

// Lints the Astro templates and the React components, with the accessibility
// rules of jsx-a11y.
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
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    rules: {
      "astro/jsx-a11y/no-redundant-roles": ["error", listRoles],
    },
  },
  {
    files: ["**/*.tsx"],
    extends: [jsxA11y.configs.recommended],
    languageOptions: { parser: tsParser },
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
