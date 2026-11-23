import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";
import graphic from "../../../assets/source/Leisure-Food-Cooking-For-Family-Friends-Guests_1--Streamline-Bruxelles-color.svg?raw";
import { formatPeople } from "../../../components/Recipes/amount";
import { locales } from "../../../components/Recipes/i18n";
import { fill } from "../../../components/Recipes/i18n/fill";
import PreviewCard from "../../../components/Recipes/PreviewCard";
import { getRecipes, type Recipe } from "../../../components/Recipes/recipes";

export async function getStaticPaths() {
  return (await getRecipes()).map((recipe) => ({
    params: { lang: recipe.lang, id: recipe.slug },
    props: { recipe },
  }));
}

// Astro bundles this route into another folder, so the path is relative to
// the project root, where Astro runs.
const font = await readFile("public/fonts/AlanSans-VariableFont_wght.ttf");
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
    // Satori ignores the weight axis of a variable font and draws its default,
    // light instance. Registered at 700, it draws that instance in a synthetic bold.
    fonts: [
      { name: "Alan Sans", data: font, weight: 400 },
      { name: "Alan Sans", data: font, weight: 700 },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
