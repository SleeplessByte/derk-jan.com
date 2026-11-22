# Recipes

Recipes are `src/recipes/*.mdx`. One route renders them: [`src/pages/recipes/[id].astro`](../src/pages/recipes/[id].astro). They are shared by link only: the pages and the index are `noindex`, `astro.config.mjs` leaves `/recipes` out of the sitemap, and the home page shows the Recipes card only in development.

## Writing a recipe

- Frontmatter: `title`, `description` (also the text of the link preview), `difficulty`, `minutes`, `servings` (the number of people that the amounts are for), `diet`, and `published: false` for a draft. A draft is only built in development.
- The steps are one numbered list. Without it, the build stops.
- `<Ingredient>` marks the first use of an ingredient. Only these go into the ingredients list. A later mention is `<IngredientReference>`, which the list does not count again. The page passes both components, so a recipe has no imports.
  - The text of an `<IngredientReference>` must be the name of an `<Ingredient>` in the same recipe, or the build stops.
  - Every ingredient name needs an icon in [`ingredient-icons.ts`](../src/components/Recipes/ingredient-icons.ts), or the build stops, and a colour in [`IngredientIcon.astro`](../src/components/Recipes/IngredientIcon.astro). See [Ingredient icons](#ingredient-icons).
- The props of `<Ingredient>`:
  - `count={0.5}`, or `weight={200} unit="g"`, or `volume={4 * 15} unit="ml"`.
  - A kitchen measure next to a weight or volume: `simple:amount={4} simple:unit="tablespoon"`. The steps show the measure; the ingredients list adds the metric amount: `4 tablespoons (60 ml) olive oil`.
  - `plural="tomatoes"` when the plural is not the name with `-s` or `-es`.
  - An amount is a number or arithmetic with `+ - * /`. Another expression, or an unknown prop, stops the build with the file and position.

## How it works

- [`remark-ingredients.ts`](../src/components/Recipes/remark-ingredients.ts) reads every `<Ingredient>` at build time. It puts the ingredients and the steps (as text) into `remarkPluginFrontmatter`, for the list and the JSON-LD.
  - It also replaces the props of each `<Ingredient>` with one prop, `data` (JSON), and gives each `<IngredientReference>` a `name`. The reason: a component gets its children as rendered HTML, not as text, so it cannot read the name itself. Because of this, the `simple:` props, whose colon Astro would read as a directive, never reach the Astro components.
- Every mention of an ingredient, in the list and in the steps, is one toggle button: icon and text ([`IngredientButton.astro`](../src/components/Recipes/IngredientButton.astro), [`highlight.ts`](../src/components/Recipes/highlight.ts)). Hovering (mouse only), focusing or pressing it highlights that ingredient everywhere, so a cook sees where it is needed again.
  - The whole mention is the button, not only the icon: its name is then the visible text. An icon button would put its name in the middle of every step for a screen reader.
  - A press also tells screen readers where the ingredient is used ("tempeh: steps 1, 3, 4, and 6"), because the highlight is visual only. Escape or a second press releases it.
  - The buttons are `disabled` until the script runs, so they do not pretend to work without JavaScript. They must not look disabled.
- [`amount.ts`](../src/components/Recipes/amount.ts) formats every amount: on the server, in the JSON-LD, and in the browser. That way the scaled amounts always match.
  - Counts and kitchen measures round to quarters (¼ ½ ¾), never below ¼.
  - Grams and millilitres round to 0.5 below 10, to whole numbers below 100, and to 5 above that. Amounts as written stay exactly as written.
- The number of people (1 to 99) goes into the URL as `?people=4`, so a shared link keeps it. `history.replaceState` passes `history.state` on, because the ClientRouter keeps its own state there. Without JavaScript, the page says "For 4 people" and shows the amounts as written.
- The share button appears only when `navigator.share` exists. It is not Baseline: Firefox on desktop has it only behind a flag.
- The JSON-LD `Recipe` is for recipe apps that import a page. Google does not show it while the page is `noindex`. schema.org only has diets for vegan and vegetarian.

## Ingredient icons

The icons come from Streamline's Freehand Duotone set (the user has a license). The user chose it over Ultimate Bold. Download a new icon with the Streamline MCP (`download_multiple_assets`, SVG, `responsive`), put the file in [`icons/`](../src/components/Recipes/icons/) as downloaded, and import it in `ingredient-icons.ts` with `?raw`.

- Every Freehand Duotone icon is filled paths in two colours: the line `#020202` and the accent `#0c6fff`. `ingredient-icons.ts` reads only the paths and stops the build for another colour, so an icon from another set fails early. Not every path has `fill-rule="evenodd"`, so each path keeps its own.
- The line takes the text colour (`currentColor`). The accent takes `--ingredient-<name>` (spaces become `-`), with a lighter dark value through `light-dark()`. The accents are thin lines: at 3:1 to 4:1 the user found them hard to read on the dark page, so the dark values reach 7:1.
- The highlight is light yellow in both themes, so a highlighted button sets `color-scheme: light`, and `light-dark()` then gives the light value. `light-dark()` became Baseline widely available on 13 November 2026.
- The remark plugin imports `ingredient-icons.ts` from `astro.config.mjs`. The `?raw` imports also work there, because Astro loads the config through Vite.
- The set has no icon for tempeh (or tofu), vinegar, wine bottle or clove, and its only other sugar icon has a cannabis leaf. The closest matches are a bean pod (tagged "soy"), a plain bottle, sugar cubes with a measuring spoon, and a spice shaker over a bowl.
- Ultimate Bold had an icon or a close match for every ingredient, but its colour sets (Ultimate Colors, Ultimate Duotone) and Plump Pop lack most vegetables, sugar and soy sauce.

## The preview card

`/recipes/<id>.png` (1200×630) is made at build time with satori and sharp.

- Satori ignores the weight axis of the variable font and draws its default, light instance. When the font is registered at weight 700, satori draws that instance in a synthetic bold. The title uses that.
- Satori sizes boxes without their padding (content-box). The root has `boxSizing: "border-box"`; without it, the padding pushes the illustration off the card.
- An element with more than one child needs `display: flex`.
- The route reads the font with a path relative to the project root, because Astro bundles the route into another folder.
