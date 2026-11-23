import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";
import graphic from "../../../assets/source/Leisure-Food-Cooking-For-Family-Friends-Guests_1--Streamline-Bruxelles-color.svg?raw";
import { formatPeople } from "../../../components/Recipes/amount";
import { locales } from "../../../components/Recipes/i18n";
import { fill } from "../../../components/Recipes/i18n/fill";
import PreviewCard, { WEIGHTS } from "../../../components/Recipes/PreviewCard";
import { getRecipes, type Recipe } from "../../../components/Recipes/recipes";

export async function getStaticPaths() {
  return (await getRecipes()).map((recipe) => ({
    params: { lang: recipe.lang, id: recipe.slug },
    props: { recipe },
  }));
}

// Astro bundles this route into another folder, so the paths are relative to
// the project root, where Astro runs. Satori ignores the weight axis of a
// variable font and draws its default, light instance, so the heavier weights
// are static instances (knowledge/recipes.md).
const fonts = {
  light: await readFile("public/fonts/AlanSans-VariableFont_wght.ttf"),
  medium: await readFile("src/assets/fonts/AlanSans-Medium.ttf"),
  semiBold: await readFile("src/assets/fonts/AlanSans-SemiBold.ttf"),
};
const graphicUrl = `data:image/svg+xml;base64,${Buffer.from(graphic).toString("base64")}`;

export const GET: APIRoute<{ recipe: Recipe }> = async ({ props }) => {
  const { lang, entry } = props.recipe;
  const t = locales[lang];
  const { title, diet, minutes, servings } = entry.data;
  const card = PreviewCard({
    label: t.recipe.card,
    title,
    details: fill(t.summary, {
      diet: t.diet[diet],
      minutes: fill(t.minutes, { count: minutes }),
      people: formatPeople(servings, t.people),
    }),
    graphic: graphicUrl,
  });

  const svg = await satori(card, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Alan Sans", data: fonts.light, weight: WEIGHTS.details },
      { name: "Alan Sans", data: fonts.medium, weight: WEIGHTS.label },
      { name: "Alan Sans", data: fonts.semiBold, weight: WEIGHTS.title },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
