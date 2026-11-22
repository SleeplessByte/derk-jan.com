import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { readFile } from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";
import graphic from "../../assets/source/Leisure-Food-Cooking-For-Family-Friends-Guests_1--Streamline-Bruxelles-color.svg?raw";
import { formatPeople } from "../../components/Recipes/amount";
import PreviewCard from "../../components/Recipes/PreviewCard";
import { getRecipes } from "../../components/Recipes/recipes";

export async function getStaticPaths() {
  return (await getRecipes()).map((recipe) => ({
    params: { id: recipe.id },
    props: { recipe },
  }));
}

// Astro bundles this route into another folder, so the path is relative to
// the project root, where Astro runs.
const font = await readFile("public/fonts/AlanSans-VariableFont_wght.ttf");
const graphicUrl = `data:image/svg+xml;base64,${Buffer.from(graphic).toString("base64")}`;

export const GET: APIRoute<{ recipe: CollectionEntry<"recipes"> }> = async ({
  props,
}) => {
  const { title, diet, minutes, servings } = props.recipe.data;
  const card = PreviewCard({
    title,
    details: `${diet} · ${minutes} minutes · for ${formatPeople(servings)}`,
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
