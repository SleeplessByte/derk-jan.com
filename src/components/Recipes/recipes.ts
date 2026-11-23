import { getCollection, render, type CollectionEntry } from "astro:content";
import { localeList, localeOf, type Locale } from "./i18n";
import type { RecipeFrontmatter } from "./remark-ingredients";

export interface Recipe {
  lang: Locale;
  /** The same in every language. */
  slug: string;
  entry: CollectionEntry<"recipes">;
}

/**
 * Get the recipes in every language, and check that their translations match.
 *
 * Drafts (`published: false`) are only built in development.
 *
 * @returns the recipes, each with its language and slug
 */
export async function getRecipes(): Promise<Recipe[]> {
  const entries = await getCollection(
    "recipes",
    ({ data }) => data.published !== false || import.meta.env.DEV,
  );
  const recipes = entries.map((entry) => {
    const [lang, slug] = entry.id.split("/");
    return { lang: localeOf(lang), slug, entry };
  });

  await checkTranslations(recipes);

  return recipes;
}

/**
 * Stop the build when a recipe is missing in a language, or differs from the
 * first language.
 *
 * Every language repeats the amounts and the details, so a change in one
 * language must be made in all of them.
 *
 * @param recipes the recipes in every language
 */
async function checkTranslations(recipes: Recipe[]) {
  const slugs = new Set(recipes.map(({ slug }) => slug));

  for (const slug of slugs) {
    const [source, ...translations] = localeList.map((lang) => {
      const recipe = recipes.find(
        (candidate) => candidate.slug === slug && candidate.lang === lang,
      );

      if (!recipe) {
        throw new Error(
          `src/recipes/${lang}/${slug}.mdx is missing: every recipe needs a version in every language.`,
        );
      }

      return recipe;
    });

    const expected = await sharedPartsOf(source);

    for (const translation of translations) {
      const actual = await sharedPartsOf(translation);
      const keys = new Set([...Object.keys(expected), ...Object.keys(actual)]);
      const differences = [...keys].filter(
        (key) => JSON.stringify(expected[key]) !== JSON.stringify(actual[key]),
      );

      if (differences.length > 0) {
        throw new Error(
          `src/recipes/${translation.lang}/${slug}.mdx differs from src/recipes/${source.lang}/${slug}.mdx in: ${differences.join(", ")}.`,
        );
      }
    }
  }
}

/**
 * Collect the details and the amounts, which are the same in every language.
 *
 * @param recipe the recipe to collect them from
 * @returns the details, and the amounts by ingredient
 */
async function sharedPartsOf({
  entry,
}: Recipe): Promise<Record<string, unknown>> {
  const { difficulty, minutes, servings, diet, published } = entry.data;
  const { remarkPluginFrontmatter } = await render(entry);
  const { ingredients } = remarkPluginFrontmatter as RecipeFrontmatter;

  return {
    difficulty,
    minutes,
    servings,
    diet,
    published,
    ...Object.fromEntries(
      ingredients.map(({ id, count, metric, measure }) => [
        id,
        { count, metric, measure: measure && [measure.value, measure.unit] },
      ]),
    ),
  };
}
