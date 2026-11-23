# Recipes

Recipes are `src/recipes/<lang>/<id>.mdx`, in English (`en`) and Dutch (`nl`). The routes in [`src/pages/recipes/[lang]/`](../src/pages/recipes/[lang]/) render them at `/recipes/en/<id>` and `/recipes/nl/<id>`, with an index per language. They are shared by link only: the pages and the indexes are `noindex`, `astro.config.mjs` leaves `/recipes` out of the sitemap, and the home page shows the Recipes card only in development.

## Writing a recipe

- Write every recipe in every language, with the same file name. A missing language stops the build.
- Frontmatter: `title`, `description` (also the text of the link preview), `difficulty`, `minutes`, `servings` (the number of people that the amounts are for), `diet`, and `published: false` for a draft. A draft is only built in development.
- The steps are one numbered list. Without it, the build stops.
- `<Ingredient>` marks the first use of an ingredient. Only these go into the ingredients list. A later mention is `<IngredientReference>`, which the list does not count again. The page passes both components, so a recipe has no imports.
  - The text of an `<Ingredient>` is its name in the recipe's language, exactly as in `ingredients` in [`i18n/<lang>.json`](../src/components/Recipes/i18n/en.json). An unknown name stops the build. See [Languages](#languages).
  - The text of an `<IngredientReference>` must be the name of an `<Ingredient>` in the same recipe, or the build stops.
- The props of `<Ingredient>`:
  - `count={0.5}`, or `weight={200} unit="g"`, or `volume={4 * 15} unit="ml"`.
  - A kitchen measure next to a weight or volume: `simple:amount={4} simple:unit="tablespoon"`. The steps show the measure; the ingredients list adds the metric amount: `4 tablespoons (60 ml) olive oil`. The unit is a key of `units` in the messages, the same in every language; an unknown unit stops the build.
  - An amount is a number or arithmetic with `+ - * /`. Another expression, or an unknown prop, stops the build with the file and position.

## Languages

- [`i18n/en.json`](../src/components/Recipes/i18n/en.json) is the source, and `nl.json` must have the same keys, as in the [Gay Café](gay-cafe-2026.md). This is the second copy of that pattern: a third one should share the code.
- `ingredients` is keyed by the English name. That key picks the icon and the colour, so it stays the same in every language. A new ingredient needs an entry in every language, an icon in [`ingredient-icons.ts`](../src/components/Recipes/ingredient-icons.ts) (the type checker fails without it) and a colour in [`IngredientIcon.astro`](../src/components/Recipes/IngredientIcon.astro). See [Ingredient icons](#ingredient-icons).
- A counted ingredient (`count`) needs a `plural` in every language, or the build stops. Dutch plurals cannot be guessed from the name (`ui`, `uien`; `paprika`, `paprika's`).
- The plural starts at more than 1 in English (`1½ red onions`). Dutch keeps the singular with a fraction (`1½ rode ui`, "anderhalve ui") and uses the plural only for whole numbers from 2.
- Grams and millilitres use the language's number format (`6,5 g` in Dutch).
- Every language repeats the details and the amounts. [`recipes.ts`](../src/components/Recipes/recipes.ts) compares each translation with the English recipe (`difficulty`, `minutes`, `servings`, `diet`, `published`, and each ingredient's amount and unit) and stops the build at a difference, with the names of what differs. The order of the ingredients may differ, because word order differs.
- The components read the language from `Astro.params.lang`, also inside the MDX content. The browser scripts get their messages as JSON in `data-messages` and the language from `<html lang>`, which the ClientRouter updates when it swaps the page. `fill()` is in its own file, so that the scripts do not bundle the messages of every language.
- The links from before the languages redirect by browser language in `netlify.toml`, as the Gay Café does. Each rule names its recipe, because a generic `/recipes/:id` would also match `/recipes/en`, and that cannot be tested locally. Only the recipes from before November 2026 need a rule.
- The language link does not keep `?people=`.

## How it works

- [`remark-ingredients.ts`](../src/components/Recipes/remark-ingredients.ts) reads every `<Ingredient>` at build time. It puts the ingredients and the steps (as text) into `remarkPluginFrontmatter`, for the list and the JSON-LD.
  - It also replaces the props of each `<Ingredient>` with one JSON prop, `data`, and gives each `<IngredientReference>` its `name` and `icon`, because a component gets its children as rendered HTML, not as text. This also keeps the `simple:` props, whose colon Astro would read as a directive, away from the Astro components.
- Every mention of an ingredient, in the list and in the steps, is one toggle button: icon and text ([`IngredientButton.astro`](../src/components/Recipes/IngredientButton.astro), [`highlight.ts`](../src/components/Recipes/highlight.ts)). Hovering (mouse only), focusing or pressing it highlights that ingredient everywhere, so a cook sees where it is needed again.
  - The whole mention is the button, not only the icon: its name is then the visible text. An icon button would put its name in the middle of every step for a screen reader.
  - A press also tells screen readers where the ingredient is used ("tempeh: steps 1, 3, 4, and 6"), because the highlight is visual only. Escape or a second press releases it.
  - The buttons are `disabled` until the script runs, so they do not pretend to work without JavaScript. They must not look disabled.
- [`amount.ts`](../src/components/Recipes/amount.ts) formats every amount: on the server, in the JSON-LD, and in the browser, so the scaled amounts always match.
- The number of people (1 to 99) goes into the URL as `?people=4`, so a shared link keeps it. `history.replaceState` passes `history.state` on, because the ClientRouter keeps its own state there. Without JavaScript, the page says "For 4 people" and shows the amounts as written.
- The share button appears only when `navigator.share` exists. It is not Baseline: Firefox on desktop has it only behind a flag.
- The JSON-LD `Recipe` is for recipe apps that import a page. Google does not show it while the page is `noindex`. schema.org only has diets for vegan and vegetarian.

## Ingredient icons

The icons come from Streamline's Freehand Duotone set (the user has a license). The user chose it over Ultimate Bold. Download a new icon with the Streamline MCP (`download_multiple_assets`, SVG, `responsive`), put the file in [`icons/`](../src/components/Recipes/icons/) as downloaded, and import it in `ingredient-icons.ts` with `?raw`.

- Every Freehand Duotone icon is filled paths in two colours: the line `#020202` and the accent `#0c6fff`. `ingredient-icons.ts` stops the build for another colour, so an icon from another set fails early.
- The line takes the text colour (`currentColor`). The accent takes `--ingredient-<English name>` (spaces become `-`), with a lighter dark value through `light-dark()`. The accents are thin lines: at 3:1 to 4:1 the user found them hard to read on the dark page, so the dark values reach 7:1.
- The highlight is light yellow in both themes, so a highlighted button sets `color-scheme: light`, and `light-dark()` then gives the light value. `light-dark()` became Baseline widely available on 13 November 2026.
- The remark plugin is imported from `astro.config.mjs`, and its JSON and `?raw` imports work because Astro loads the config through Vite. After a change to the plugin or to the files it imports, reload the config (see [Local development](local-development.md)).
- The set has no icon for tempeh (or tofu), vinegar, wine bottle or clove, and its only other sugar icon has a cannabis leaf. The stand-ins are a bean pod (tagged "soy"), a plain bottle, sugar cubes with a measuring spoon, and a spice shaker over a bowl.

## The preview card

`/recipes/<lang>/<id>.png` (1200×630) is made at build time with satori and sharp, with the label and details in the recipe's language.

- The details are Light (the variable font's default), the label Medium and the title SemiBold, from the static instances (see [Link previews](link-previews.md)). The route registers each font at its weight from `WEIGHTS` in `PreviewCard.tsx`, because satori picks the font by the text's weight.
- The square thumbnail is the card's illustration, the same for every recipe (`recipes/thumbnail.png.ts`).
