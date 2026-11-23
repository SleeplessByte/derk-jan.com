import sugarCubes from "./icons/Alternative-Food-Sugar-Amount--Streamline-Freehand.svg?raw";
import bottle from "./icons/Oil-Bottle-1--Streamline-Freehand.svg?raw";
import shoyu from "./icons/Sauce-Shoyu-Japanese--Streamline-Freehand.svg?raw";
import spiceBowl from "./icons/Seasoning-Food-Bowl--Streamline-Freehand.svg?raw";
import pepperMill from "./icons/Seasoning-Pepper--Streamline-Freehand.svg?raw";
import saltShaker from "./icons/Seasoning-Salt--Streamline-Freehand.svg?raw";
import cucumber from "./icons/Vegetable-Cucumber-Slice-1--Streamline-Freehand.svg?raw";
import beanPod from "./icons/Vegetables-Bean--Streamline-Freehand.svg?raw";
import bellPepper from "./icons/Vegetables-Bellpepper--Streamline-Freehand.svg?raw";
import oliveOilBottle from "./icons/Vegetables-Olive-Oil-Bottle--Streamline-Freehand.svg?raw";
import onion from "./icons/Vegetables-Onion-1--Streamline-Freehand.svg?raw";
import waterGlass from "./icons/Water-Glass-Half-Full--Streamline-Freehand.svg?raw";
import type { IngredientId } from "./i18n";

const sources = {
  tempeh: beanPod,
  "olive oil": oliveOilBottle,
  "white wine vinegar": bottle,
  "teriyaki sauce": shoyu,
  water: waterGlass,
  sugar: sugarCubes,
  salt: saltShaker,
  pepper: pepperMill,
  cucumber,
  "red onion": onion,
  "red pepper": bellPepper,
  cloves: spiceBowl,
} satisfies Record<IngredientId, string>;

const LINE = "#020202";
const ACCENT = "#0c6fff";

interface Part {
  layer: "line" | "accent";
  d: string;
  evenOdd: boolean;
}

function toParts(name: string, svg: string): Part[] {
  return Array.from(svg.matchAll(/<path\b([^>]*)>/g), ([, attributes]) => {
    const read = (attribute: string) =>
      attributes.match(new RegExp(`\\b${attribute}="([^"]*)"`))?.[1];
    const d = read("d");
    const fill = read("fill");

    if (d === undefined || (fill !== LINE && fill !== ACCENT)) {
      throw new Error(
        `The icon of "${name}" has a path that is not ${LINE} or ${ACCENT}. Use an icon from Streamline Freehand Duotone.`,
      );
    }

    return {
      layer: fill === LINE ? "line" : "accent",
      d,
      evenOdd: read("fill-rule") === "evenodd",
    };
  });
}

export const ingredientIcons = Object.fromEntries(
  Object.entries(sources).map(([name, svg]) => [name, toParts(name, svg)]),
) as Record<IngredientId, Part[]>;
