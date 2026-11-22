import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { toString } from "mdast-util-to-string";
import {
  formatIngredient,
  INGREDIENT_PROPS,
  toIngredientData,
  type IngredientData,
  type IngredientProps,
} from "./amount";
import { hasIngredientIcon } from "./ingredient-icons";

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

/**
 * The ingredients list and the structured data are rendered before or apart
 * from the steps, so they cannot come from the `<Ingredient>` components
 * themselves. This collects the same data from the recipe's source.
 */
export const remarkIngredients: RemarkPlugin = () => (tree, file) => {
  if (!file.path.includes("/src/recipes/")) {
    return;
  }

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
    const data = readIngredient(node, file);
    ingredients.set(node, data);
    node.attributes = [
      { type: "mdxJsxAttribute", name: "data", value: JSON.stringify(data) },
    ];
  }

  const names = new Set([...ingredients.values()].map(({ name }) => name));

  for (const node of elementsNamed(root, "IngredientReference")) {
    const name = toString(node);

    if (!names.has(name)) {
      file.fail(`"${name}" is not an <Ingredient> of this recipe.`, node);
    }

    node.attributes = [{ type: "mdxJsxAttribute", name: "name", value: name }];
  }

  const extracted: RecipeFrontmatter = {
    ingredients: [...ingredients.values()],
    steps: steps.children.map((step) =>
      textOf(step, ingredients).replace(/\s+/g, " ").trim(),
    ),
  };

  // Astro sets the frontmatter before the remark plugins run.
  Object.assign(file.data.astro!.frontmatter!, extracted);
};

function elementsNamed(node: Node, name: string): Node[] {
  if (node.type === "mdxJsxTextElement" && node.name === name) {
    return [node];
  }

  return (node.children ?? []).flatMap((child) => elementsNamed(child, name));
}

function textOf(node: Node, ingredients: Map<Node, IngredientData>): string {
  const ingredient = ingredients.get(node);

  if (ingredient) {
    return formatIngredient(ingredient, 1);
  }

  if (typeof node.value === "string") {
    return node.value;
  }

  return (node.children ?? [])
    .map((child) => textOf(child, ingredients))
    .join("");
}

function readIngredient(node: Node, file: File) {
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

  const name = toString(node);

  if (!hasIngredientIcon(name)) {
    file.fail(
      `"${name}" has no icon. Add a Streamline Freehand Duotone icon in src/components/Recipes/ingredient-icons.ts.`,
      node,
    );
  }

  return toIngredientData(name, props as IngredientProps);
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
