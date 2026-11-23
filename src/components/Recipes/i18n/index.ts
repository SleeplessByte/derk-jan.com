import en from "./en.json";
import nlJson from "./nl.json";

export type Messages = typeof en;
export type Locale = keyof typeof locales;

export type IngredientId = keyof Messages["ingredients"];
export type KitchenUnit = keyof Messages["units"];

const nl: Messages = nlJson;

export const locales = { en, nl };
export const localeList = Object.keys(locales) as Locale[];

/**
 * Find the locale of a page.
 *
 * Pass `Astro.params.lang` and place pages under `[lang]/`.
 *
 * @param lang the language of the page
 * @returns the locale of that language
 */
export function localeOf(lang: string | undefined) {
  const locale = localeList.find((known) => known === lang);

  if (!locale) {
    throw new Error(`The recipes have no messages for "${lang}"`);
  }

  return locale;
}

export function messagesFor(lang: string | undefined) {
  return locales[localeOf(lang)];
}

export function recipeUrl(lang: Locale, id = "") {
  return `/recipes/${lang}/${id}`;
}
