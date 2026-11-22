type KitchenMeasure = { "simple:amount": number; "simple:unit": string };
type NoKitchenMeasure = { [Key in keyof KitchenMeasure]?: undefined };

export type IngredientProps = { plural?: string } & (
  | ({ count: number } & NoKitchenMeasure)
  | ({ weight: number; unit: "g" } & (KitchenMeasure | NoKitchenMeasure))
  | ({ volume: number; unit: "ml" } & (KitchenMeasure | NoKitchenMeasure))
  | KitchenMeasure
  | NoKitchenMeasure
);

export const INGREDIENT_PROPS = [
  "count",
  "weight",
  "volume",
  "unit",
  "simple:amount",
  "simple:unit",
  "plural",
];

type Quantity = { value: number; unit: string };

export type IngredientData = {
  name: string;
  plural?: string;
  count?: number;
  metric?: Quantity;
  measure?: Quantity;
};

export function toIngredientData(
  name: string,
  props: IngredientProps,
): IngredientData {
  const data: IngredientData = { name, plural: props.plural };

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
    };
  }

  return data;
}

const NO_BREAK_SPACE = String.fromCodePoint(0xa0);
const QUARTERS = ["", "¼", "½", "¾"];
const numberFormat = new Intl.NumberFormat("en");

/**
 * @param factor the number of people to cook for, divided by the recipe's number
 * @param options.metric adds grams or milliliters after a kitchen measure
 */
export function formatIngredient(
  data: IngredientData,
  factor: number,
  { metric = false } = {},
): string {
  const metricText = data.metric && formatMetric(data.metric, factor);

  if (data.measure) {
    const value = roundToQuarter(data.measure.value * factor);
    const measure = `${formatQuarters(value)}${NO_BREAK_SPACE}${pluralize(data.measure.unit, value)}`;

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
    const name =
      value > 1 ? (data.plural ?? pluralize(data.name, value)) : data.name;
    return `${formatQuarters(value)} ${name}`;
  }

  return data.name;
}

export function formatPeople(count: number) {
  if (count === 1) {
    return "1 person";
  }

  return `${count} people`;
}

// Spoons and vegetables split into quarters at most, and never into nothing.
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

// About as precise as a kitchen scale or measuring jug, so that the amounts as
// written (26 g, 120 ml) stay as they are.
function formatMetric({ value, unit }: Quantity, factor: number) {
  return `${numberFormat.format(roundMetric(value * factor))}${NO_BREAK_SPACE}${unit}`;
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

function pluralize(noun: string, amount: number) {
  if (amount <= 1) {
    return noun;
  }

  if (/(s|sh|ch|x|z)$/.test(noun)) {
    return `${noun}es`;
  }

  return `${noun}s`;
}
