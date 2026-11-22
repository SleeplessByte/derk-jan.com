/**
 * Hovering, focusing or pressing an ingredient highlights it in the list and in
 * every step, so a cook sees where it is needed again.
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
    status.textContent = name ? whereUsed(name, buttons) : "";
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

function whereUsed(name: string, buttons: HTMLButtonElement[]) {
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
  const list = new Intl.ListFormat("en").format(numbers);

  if (numbers.length === 1) {
    return `${name}: step ${list}`;
  }

  return `${name}: steps ${list}`;
}
