import { defineCollection } from "astro:content";
import { z } from "astro/zod";
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
  loader: glob({ pattern: "*/*.mdx", base: "./src/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(["easy", "medium", "hard"]),
    minutes: z.number().int().positive(),
    servings: z.number().int().positive(),
    diet: z.enum(["vegan", "vegetarian", "pescetarian", "omnivore"]),
    published: z.optional(z.boolean()),
  }),
});

export const collections = { articles, recipes };
