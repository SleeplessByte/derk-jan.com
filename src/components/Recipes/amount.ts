import type { IngredientId, KitchenUnit, Locale, Messages } from "./i18n";
import { fill } from "./i18n/fill";

type KitchenMeasure = { "simple:amount": number; "simple:unit": KitchenUnit };
type NoKitchenMeasure = { [Key in keyof KitchenMeasure]?: undefined };

export type IngredientProps =
  | ({ count: number } & NoKitchenMeasure)
  | ({ weight: number; unit: "g" } & (KitchenMeasure | NoKitchenMeasure))
  | ({ volume: number; unit: "ml" } & (KitchenMeasure | NoKitchenMeasure))
  | KitchenMeasure
  | NoKitchenMeasure;

export const INGREDIENT_PROPS = [
  "count",
  "weight",
  "volume",
  "unit",
  "simple:amount",
  "simple:unit",
];

type Quantity = { value: number; unit: string };

/** A word in the recipe's language. */
export type Noun = { name: string; plural?: string };

export type IngredientData = Noun & {
  id: IngredientId;
  count?: number;
  metric?: Quantity;
  measure?: { value: number; unit: KitchenUnit; noun: Required<Noun> };
};

export function toIngredientData(
  id: IngredientId,
  props: IngredientProps,
  t: Messages,
): IngredientData {
  const data: IngredientData = { id, ...t.ingredients[id] };

  if ("count" in props) {
    data.count = props.count;
  }

  if ("weight" in props) {
    data.metric = { value: props.weight, unit: props.unit };
  }

  if ("volume" in props) {
    data.metric = { value: props.volume, unit: props.unit };
  }

  if (props["simple:amount"] !== undefined) {
    data.measure = {
      value: props["simple:amount"],
      unit: props["simple:unit"],
      noun: t.units[props["simple:unit"]],
    };
  }

  return data;
}

const NO_BREAK_SPACE = String.fromCodePoint(0xa0);
const QUARTERS = ["", "¼", "½", "¾"];

const IS_PLURAL: Record<Locale, (amount: number) => boolean> = {
  en: (amount) => amount > 1,
  // "Anderhalve ui", "tweeënhalve eetlepel": with a fraction, Dutch keeps the singular.
  nl: (amount) => amount > 1 && Number.isInteger(amount),
};

/**
 * Format the amount and the name of an ingredient for the number of people.
 *
 * @param data the ingredient as the recipe gives it
 * @param factor the number of people to cook for, divided by the recipe's number
 * @param options how to format
 * @param options.lang the language to format in
 * @param options.metric adds grams or millilitres after a kitchen measure
 * @returns the amount and the name, for example "4 tablespoons (60 ml) olive oil"
 */
export function formatIngredient(
  data: IngredientData,
  factor: number,
  { lang, metric = false }: { lang: Locale; metric?: boolean },
): string {
  const metricText = data.metric && formatMetric(data.metric, factor, lang);

  if (data.measure) {
    const value = roundToQuarter(data.measure.value * factor);
    const measure = `${formatQuarters(value)}${NO_BREAK_SPACE}${inflect(data.measure.noun, value, lang)}`;

    if (metric && metricText) {
      return `${measure} (${metricText}) ${data.name}`;
    }

    return `${measure} ${data.name}`;
  }

  if (metricText) {
    return `${metricText} ${data.name}`;
  }

  if (data.count !== undefined) {
    const value = roundToQuarter(data.count * factor);
    return `${formatQuarters(value)} ${inflect(data, value, lang)}`;
  }

  return data.name;
}

export function formatPeople(count: number, people: Messages["people"]) {
  if (count === 1) {
    return fill(people.one, { count });
  }

  return fill(people.other, { count });
}

/**
 * Choose the singular or the plural of an ingredient for the amount.
 *
 * `remark-ingredients.ts` makes sure that every counted ingredient has a plural.
 *
 * @param noun the ingredient, with its plural
 * @param amount the amount that the noun goes with
 * @param lang the language whose plural rule applies
 * @returns the singular or the plural
 */
function inflect(noun: Noun, amount: number, lang: Locale) {
  if (IS_PLURAL[lang](amount)) {
    return noun.plural!;
  }

  return noun.name;
}

/**
 * Round a count or a kitchen measure to quarters.
 *
 * Spoons and vegetables split into quarters at most, and never into nothing.
 *
 * @param value the scaled amount
 * @returns the amount in quarters, at least one quarter
 */
function roundToQuarter(value: number) {
  return Math.max(1, Math.round(value * 4)) / 4;
}

function formatQuarters(value: number) {
  const whole = Math.floor(value);
  const quarter = QUARTERS[(value - whole) * 4];

  if (whole === 0) {
    return quarter;
  }

  return `${whole}${quarter}`;
}

/**
 * Format grams or millilitres for the number of people.
 *
 * About as precise as a kitchen scale or measuring jug, so that the amounts as
 * written (26 g, 120 ml) stay as they are.
 *
 * @param quantity the amount as written, with its unit
 * @param factor the number of people to cook for, divided by the recipe's number
 * @param lang the language whose number format applies
 * @returns the rounded amount with its unit
 */
function formatMetric({ value, unit }: Quantity, factor: number, lang: Locale) {
  const amount = new Intl.NumberFormat(lang).format(
    roundMetric(value * factor),
  );
  return `${amount}${NO_BREAK_SPACE}${unit}`;
}

function roundMetric(value: number) {
  if (value < 10) {
    return Math.max(0.5, Math.round(value * 2) / 2);
  }

  if (value < 100) {
    return Math.round(value);
  }

  return Math.round(value / 5) * 5;
}
