import type { Messages } from "./i18n";
import { fill } from "./i18n/fill";

type UsedIn = Messages["highlight"]["usedIn"];

/**
 * Highlight an ingredient in the list and in every step while it is hovered,
 * focused or pressed.
 *
 * A cook then sees where it is needed again.
 */
export function setupHighlight() {
  const list = document.querySelector<HTMLElement>(
    '[data-component="ingredient-list"]',
  );

  // The router fires page-load on every page, and only recipes have the list.
  if (!list) {
    return;
  }

  const status = list.querySelector<HTMLElement>(".status")!;
  const usedIn = JSON.parse(list.dataset.messages!) as UsedIn;
  const buttons = [
    ...document.querySelectorAll<HTMLButtonElement>(
      '[data-component="ingredient-button"]',
    ),
  ];

  let pressed: string | undefined;
  let hovered: string | undefined;
  let focused: string | undefined;

  function render() {
    const shown = hovered ?? focused ?? pressed;

    for (const button of buttons) {
      const name = button.dataset.ingredientName;
      button.classList.toggle("--highlighted", name === shown);
      button.setAttribute("aria-pressed", String(name === pressed));
    }
  }

  function press(name: string | undefined) {
    pressed = name;
    render();

    // A highlight is visual only. This is for screen readers to hear where.
    status.textContent = name ? whereUsed(name, buttons, usedIn) : "";
  }

  for (const button of buttons) {
    const name = button.dataset.ingredientName!;
    button.disabled = false;

    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") {
        hovered = name;
        render();
      }
    });
    button.addEventListener("pointerleave", () => {
      hovered = undefined;
      render();
    });
    button.addEventListener("focus", () => {
      focused = name;
      render();
    });
    button.addEventListener("blur", () => {
      focused = undefined;
      render();
    });
    button.addEventListener("click", () => {
      press(pressed === name ? undefined : name);
    });
    button.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && pressed) {
        press(undefined);
      }
    });
  }
}

function whereUsed(name: string, buttons: HTMLButtonElement[], usedIn: UsedIn) {
  const steps = new Set(
    buttons
      .filter(
        (button) =>
          button.classList.contains("--inline") &&
          button.dataset.ingredientName === name,
      )
      .map((button) => button.closest("li")!),
  );
  const numbers = [...steps].map((step) =>
    String([...step.parentElement!.children].indexOf(step) + 1),
  );
  const list = new Intl.ListFormat(document.documentElement.lang).format(
    numbers,
  );

  if (numbers.length === 1) {
    return fill(usedIn.one, { name, steps: list });
  }

  return fill(usedIn.other, { name, steps: list });
}
