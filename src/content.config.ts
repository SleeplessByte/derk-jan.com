import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/!(index).{md,mdx,astro,tsx}",
    base: "./src/pages/articles",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    published: z.optional(z.boolean()),
  }),
});

const recipes = defineCollection({
  loader: glob({
    pattern: "**/!(index).{md,mdx,astro,tsx}",
    base: "./src/pages/recipes",
  }),
  schema: z.object({
    title: z.string(),
    description: z.optional(z.string()),
    difficulty: z.union([
      z.literal("easy"),
      z.literal("medium"),
      z.literal("hard"),
    ]),
    time: z.string(),
    vegan: z.optional(z.boolean()),
    vegetarian: z.optional(z.boolean()),
    pescetarian: z.optional(z.boolean()),
    // date: z.coerce.date(),
    published: z.optional(z.boolean()),
  }),
});

export const collections = { articles, recipes };
