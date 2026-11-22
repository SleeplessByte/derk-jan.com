import { getCollection } from "astro:content";

/** Drafts (`published: false`) are only built in development. */
export async function getRecipes() {
  const recipes = await getCollection(
    "recipes",
    ({ data }) => data.published !== false || import.meta.env.DEV,
  );

  return recipes.sort((a, b) => a.data.title.localeCompare(b.data.title));
}
