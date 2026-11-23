const COLOURS = ["--pink", "--orange", "--gold", "--blue"];
const DOT_SHARE = 0.4;
const PIECES_BASE = 8;
const PIECES_PER_GUEST = 6;

export function setupRsvpReaction() {
  // Absent on the success page, and when the closed signup has replaced the form.
  const root = document.querySelector<HTMLElement>(
    '[data-component="rsvp-reaction"]',
  );
  if (!root) {
    return;
  }

  const form = root.closest("form")!;
  const line = root.querySelector<HTMLElement>(".line")!;
  const messages = new Map(
    [...root.querySelectorAll<HTMLElement>(".messages > [data-value]")].map(
      (item) => [item.dataset.value!, item.textContent.trim()],
    ),
  );

  form.addEventListener("change", (event) => {
    const input = event.target as HTMLInputElement;
    if (input.name !== "rsvp") {
      return;
    }

    line.textContent = messages.get(input.value)!;

    const guests = Number(input.value);
    if (guests > 0 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      celebrate(root, input, guests);
    }
  });
}

function pick(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function celebrate(root: HTMLElement, from: HTMLElement, guests: number) {
  const box = root.getBoundingClientRect();
  const radio = from.getBoundingClientRect();
  const x = radio.left + radio.width / 2 - box.left;
  const y = radio.top + radio.height / 2 - box.top;

  for (let i = 0; i < PIECES_BASE + guests * PIECES_PER_GUEST; i++) {
    const piece = document.createElement("span");
    piece.className = `piece ${pick(COLOURS)}`;

    if (Math.random() < DOT_SHARE) {
      piece.classList.add("--dot");
    }

    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;

    root.append(piece);

    const angle = -Math.PI / 2 + 0.35 + (Math.random() - 0.5) * 2.2;
    const speed = 50 + Math.random() * 110;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;
    const fall = 50 + Math.random() * 50;
    const spin = (Math.random() - 0.5) * 900;

    const flight = piece.animate(
      [
        { translate: "-50% -50%", rotate: "0deg", opacity: 1 },
        {
          translate: `calc(${dx}px - 50%) calc(${dy}px - 50%)`,
          rotate: `${spin / 2}deg`,
          opacity: 1,
          offset: 0.35,
        },
        {
          translate: `calc(${dx * 1.4}px - 50%) calc(${dy + fall}px - 50%)`,
          rotate: `${spin}deg`,
          opacity: 0,
        },
      ],
      {
        duration: 1100 + Math.random() * 600,
        easing: "cubic-bezier(0.2, 0.7, 0.4, 1)",
      },
    );

    flight.addEventListener("finish", () => {
      piece.remove();
    });
  }
}
