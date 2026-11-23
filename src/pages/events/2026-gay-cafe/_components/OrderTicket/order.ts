export interface Order {
  firstName: string;
  lastName: string;
  rsvp: string | null;
  arrival: Choice | null;
  stay: (Choice & { untilClosing: boolean }) | null;
  drinks: Item[];
  allergies: Item[];
}

interface Item {
  text: string;
  icon: string;
}

interface Choice {
  value: string;
  text: string;
}

export const ORDER_KEY = "gay-cafe-2026-order";

export function readOrder(form: HTMLFormElement): Order {
  const field = <T extends Element>(selector: string) =>
    form.querySelector<T>(selector)!;

  const checked = (name: string) => [
    ...form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`),
  ];

  const items = (name: string) =>
    checked(name).map((input) => {
      const label = input.labels![0];
      return {
        text: label.querySelector("span")!.textContent.trim(),
        icon: label.querySelector<SVGElement>('[data-component="form-icon"]')!
          .dataset.icon!,
      };
    });

  const staySelect = field<HTMLSelectElement>("#time-duration");
  const stay = chosen(staySelect);

  return {
    firstName: field<HTMLInputElement>("#first-name").value.trim(),
    lastName: field<HTMLInputElement>("#last-name").value.trim(),
    rsvp: checked("rsvp")[0]?.value ?? null,
    arrival: chosen(field<HTMLSelectElement>("#time-arrival")),
    stay: stay && {
      ...stay,
      untilClosing:
        staySelect.selectedOptions[0].hasAttribute("data-until-closing"),
    },
    drinks: items("preferences[drinks][]"),
    allergies: items("allergens[]").map((item) => ({
      ...item,
      text: item.text.replace(/\s*\(.*$/s, ""),
    })),
  };
}

function chosen(select: HTMLSelectElement): Choice | null {
  const option = select.selectedOptions[0];
  if (option.disabled) {
    return null;
  }

  return { value: option.value, text: option.textContent.trim() };
}

export function keepOrderOnSubmit(form: HTMLFormElement) {
  form.addEventListener("submit", () => {
    try {
      sessionStorage.setItem(ORDER_KEY, JSON.stringify(readOrder(form)));
    } catch {
      // Storage can be blocked or full
    }
  });
}

export function recallOrder(): Order | null {
  try {
    return JSON.parse(
      sessionStorage.getItem(ORDER_KEY) ?? "null",
    ) as Order | null;
  } catch {
    return null;
  }
}
