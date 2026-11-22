// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerMetaHighlight,
} from "@shikijs/transformers";

import { remarkReadingTime } from "./remark-reading-time.mjs";
import { remarkIngredients } from "./src/components/Recipes/remark-ingredients.ts";
import { unified } from "@astrojs/markdown-remark";

// Shared by link only, so not in the sitemap.
const UNLISTED = ["/prototypes/", "/recipes"];

// https://astro.build/config
export default defineConfig({
  site: "https://derk-jan.com",
  adapter: netlify({
    imageCDN: false,
    devFeatures: {
      environmentVariables: true,
      images: false,
      edgeFunctions: false,
    },
  }),
  markdown: {
    syntaxHighlight: {
      type: "shiki",
    },
    shikiConfig: {
      theme: "github-dark",
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerMetaHighlight(),
      ],
    },
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkIngredients],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx({ syntaxHighlight: "shiki" }),
    sitemap({
      filter: (page) =>
        !UNLISTED.some((prefix) => new URL(page).pathname.startsWith(prefix)),
    }),
  ],
});
