import { formatIngredient, formatPeople, type IngredientData } from "./amount";
import type { Locale, Messages } from "./i18n";
import { fill } from "./i18n/fill";

export type ServingsMessages = {
  people: Messages["people"];
  status: string;
};

export function setupServings() {
  const root = document.querySelector<HTMLElement>(
    '[data-component="servings"]',
  );

  // The router fires page-load on every page, and only recipes have the control.
  if (!root) {
    return;
  }

  const servings = Number(root.dataset.servings);
  const control = root.querySelector<HTMLElement>(".control")!;
  const input = root.querySelector<HTMLInputElement>(".people")!;
  const status = root.querySelector<HTMLElement>(".status")!;
  const messages = JSON.parse(root.dataset.messages!) as ServingsMessages;
  const lang = document.documentElement.lang as Locale;

  const isValid = (people: number) =>
    Number.isInteger(people) &&
    people >= Number(input.min) &&
    people <= Number(input.max);

  // A shared link keeps the number of people it was sent with.
  const fromLink = Number(new URLSearchParams(location.search).get("people"));
  let people = servings;

  if (isValid(fromLink)) {
    people = fromLink;
    input.value = String(people);
    renderAmounts(people / servings, lang);
  }

  root.querySelector<HTMLElement>(".fallback")!.hidden = true;
  control.hidden = false;

  function change(next: number) {
    if (!isValid(next) || next === people) {
      return;
    }

    people = next;
    renderAmounts(people / servings, lang);
    status.textContent = fill(messages.status, {
      people: formatPeople(people, messages.people),
    });

    const url = new URL(location.href);

    if (people === servings) {
      url.searchParams.delete("people");
    } else {
      url.searchParams.set("people", String(people));
    }

    // The router keeps its own state in history.state.
    history.replaceState(history.state, "", url);
  }

  input.addEventListener("input", () => {
    change(input.valueAsNumber);
  });

  function step(by: number) {
    change(people + by);
    input.value = String(people);
  }

  root.querySelector(".--fewer")!.addEventListener("click", () => {
    step(-1);
  });
  root.querySelector(".--more")!.addEventListener("click", () => {
    step(1);
  });
}

function renderAmounts(factor: number, lang: Locale) {
  for (const element of document.querySelectorAll<HTMLElement>(
    "[data-ingredient]",
  )) {
    const data = JSON.parse(element.dataset.ingredient!) as IngredientData;
    element.textContent = formatIngredient(data, factor, {
      lang,
      metric: "metric" in element.dataset,
    });
  }
}
