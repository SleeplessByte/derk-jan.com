import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { toString } from "mdast-util-to-string";
import {
  formatIngredient,
  INGREDIENT_PROPS,
  toIngredientData,
  type IngredientData,
} from "./amount";
import {
  localeList,
  localeOf,
  locales,
  type IngredientId,
  type Locale,
} from "./i18n";

// Only the parts of the mdast, MDX and estree nodes that this plugin reads.
type Expression = {
  type: string;
  value?: unknown;
  operator?: string;
  left?: Expression;
  right?: Expression;
};

type Attribute = {
  type: string;
  name?: string;
  value?:
    | string
    | null
    | { data?: { estree?: { body: { expression?: Expression }[] } } };
};

type Node = {
  type: string;
  name?: string | null;
  value?: unknown;
  ordered?: boolean | null;
  children?: Node[];
  attributes?: Attribute[];
};

/** What this plugin adds to `remarkPluginFrontmatter`. */
export type RecipeFrontmatter = {
  ingredients: IngredientData[];
  steps: string[];
};

type File = { fail(reason: string, place?: Node): never };

// Each recipe names its ingredients in its own language.
const ingredientIds = Object.fromEntries(
  localeList.map((lang) => [lang, idsByName(lang)]),
) as Record<Locale, Map<string, IngredientId>>;

/**
 * Collect the ingredients and the steps of a recipe from its source.
 *
 * The ingredients list and the structured data are rendered before or apart
 * from the steps, so they cannot come from the `<Ingredient>` components
 * themselves.
 *
 * @returns the transformer, which puts them in `remarkPluginFrontmatter`
 */
export const remarkIngredients: RemarkPlugin = () => (tree, file) => {
  const folder = /\/src\/recipes\/([^/]+)\//.exec(file.path)?.[1];

  if (!folder) {
    return;
  }

  const lang = localeOf(folder);

  const root: Node = tree;
  const steps = root.children?.find(
    (node) => node.type === "list" && node.ordered,
  );

  if (!steps?.children) {
    return file.fail("A recipe needs its steps as a numbered list.");
  }

  const ingredients = new Map<Node, IngredientData>();

  // A component gets its children as rendered HTML, not as text, so the
  // components get the name and the amounts from here.
  for (const node of elementsNamed(root, "Ingredient")) {
    const data = readIngredient(node, file, lang);
    ingredients.set(node, data);
    node.attributes = [
      { type: "mdxJsxAttribute", name: "data", value: JSON.stringify(data) },
    ];
  }

  const ids = new Map(
    [...ingredients.values()].map(({ id, name }) => [name, id]),
  );

  for (const node of elementsNamed(root, "IngredientReference")) {
    const name = toString(node);
    const id = ids.get(name);

    if (!id) {
      file.fail(`"${name}" is not an <Ingredient> of this recipe.`, node);
    }

    node.attributes = [
      { type: "mdxJsxAttribute", name: "name", value: name },
      { type: "mdxJsxAttribute", name: "icon", value: id },
    ];
  }

  const extracted: RecipeFrontmatter = {
    ingredients: [...ingredients.values()],
    steps: steps.children.map((step) =>
      textOf(step, ingredients, lang).replace(/\s+/g, " ").trim(),
    ),
  };

  // Astro sets the frontmatter before the remark plugins run.
  Object.assign(file.data.astro!.frontmatter!, extracted);
};

function idsByName(lang: Locale) {
  const ids = new Map<string, IngredientId>();

  for (const [id, { name }] of Object.entries(locales[lang].ingredients)) {
    if (ids.has(name)) {
      throw new Error(
        `Two ingredients are called "${name}" in src/components/Recipes/i18n/${lang}.json.`,
      );
    }

    ids.set(name, id as IngredientId);
  }

  return ids;
}

function elementsNamed(node: Node, name: string): Node[] {
  if (node.type === "mdxJsxTextElement" && node.name === name) {
    return [node];
  }

  return (node.children ?? []).flatMap((child) => elementsNamed(child, name));
}

function textOf(
  node: Node,
  ingredients: Map<Node, IngredientData>,
  lang: Locale,
): string {
  const ingredient = ingredients.get(node);

  if (ingredient) {
    return formatIngredient(ingredient, 1, { lang });
  }

  if (typeof node.value === "string") {
    return node.value;
  }

  return (node.children ?? [])
    .map((child) => textOf(child, ingredients, lang))
    .join("");
}

function readIngredient(node: Node, file: File, lang: Locale) {
  const props: Record<string, string | number> = {};

  for (const attribute of node.attributes ?? []) {
    const { name, value } = attribute;

    if (
      attribute.type !== "mdxJsxAttribute" ||
      !name ||
      !INGREDIENT_PROPS.includes(name)
    ) {
      file.fail(`<Ingredient> has no prop ${name ?? "spread"}.`, node);
    }

    if (typeof value === "string") {
      props[name] = value;
      continue;
    }

    const expression = value?.data?.estree?.body[0]?.expression;

    if (!expression) {
      file.fail(`<Ingredient ${name}> needs a value.`, node);
    }

    props[name] = evaluate(expression, node, file);
  }

  const t = locales[lang];
  const messages = `src/components/Recipes/i18n/${lang}.json`;
  const name = toString(node);
  const id = ingredientIds[lang].get(name);

  if (!id) {
    file.fail(
      `"${name}" is not an ingredient in ${messages}. Add it in every language, with an icon in src/components/Recipes/ingredient-icons.ts.`,
      node,
    );
  }

  if ("count" in props && !("plural" in t.ingredients[id])) {
    file.fail(
      `"${name}" is counted, so it needs a plural in ${messages}.`,
      node,
    );
  }

  const unit = props["simple:unit"];

  if (unit !== undefined && !Object.hasOwn(t.units, unit)) {
    file.fail(`"${unit}" is not a unit in ${messages}.`, node);
  }

  return toIngredientData(id, props, t);
}

function evaluate(expression: Expression, place: Node, file: File): number {
  if (expression.type === "Literal" && typeof expression.value === "number") {
    return expression.value;
  }

  if (
    expression.type === "BinaryExpression" &&
    expression.left &&
    expression.right
  ) {
    const left = evaluate(expression.left, place, file);
    const right = evaluate(expression.right, place, file);

    switch (expression.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
    }
  }

  file.fail(
    "Write an amount as a number or as arithmetic, like {4 * 15}.",
    place,
  );
}
