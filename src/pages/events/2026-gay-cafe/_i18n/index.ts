import en from "./en.json";
import nlJson from "./nl.json";

/** English is the source: every other language has exactly its keys. */
export type Messages = typeof en;
export type Locale = keyof typeof locales;

const nl: Messages = nlJson;

export const locales = { en, nl };
export const localeList = Object.keys(locales) as Locale[];

/**
 * Find the locale of a page.
 *
 * Pass `Astro.params.lang` and place pages under `[lang]/`. A language without
 * messages stops the build.
 *
 * @param lang the language of the page
 * @returns the locale of that language
 */
export function localeOf(lang: string | undefined) {
  const locale = localeList.find((known) => known === lang);
  if (!locale) {
    throw new Error(`The Gay Café has no messages for "${lang}"`);
  }
  return locale;
}

export function messagesFor(lang: string | undefined) {
  return locales[localeOf(lang)];
}

export function pageUrl(lang?: Locale, page = "") {
  return lang
    ? `/events/2026-gay-cafe/${lang}/${page}`
    : "/events/2026-gay-cafe/";
}
