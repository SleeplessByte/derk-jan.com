import { keepOrderOnSubmit, readOrder, recallOrder, type Order } from "./order";

const EMPTY = "—";

const FEED_MS_PER_PX = 9;
const FEED_MIN_MS = 250;
const FEED_MAX_MS = 900;

/** Counts copied icons, so that every copy's mask gets a unique id. */
let copies = 0;

export function setupTicket() {
  // Absent on pages without a ticket, and when the closed signup has replaced the form.
  const root = document.querySelector<HTMLElement>(
    '[data-component="order-ticket"]',
  );
  if (!root) {
    return;
  }

  const slot = (name: string) =>
    root.querySelector<HTMLElement>(`[data-slot="${name}"]`)!;

  const stamps = root.querySelectorAll<HTMLElement>(".stamp");
  const sheet = root.querySelector<HTMLElement>(".sheet")!;
  const icons = root.querySelector<HTMLTemplateElement>(
    "template[data-icons]",
  )!.content;

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

  let feed: Animation | undefined;

  function copyIcon(name: string, struck: boolean) {
    const icon = icons
      .querySelector(`[data-icon="${name}"]`)!
      .cloneNode(true) as SVGSVGElement;

    const mask = icon.querySelector("mask");
    if (mask) {
      copies += 1;
      mask.id = `${mask.id}-${copies}`;
      icon.querySelector("g")!.setAttribute("mask", `url(#${mask.id})`);
    }

    if (struck) {
      icon.classList.add("--struck");
    }
    return icon;
  }

  function listOf(entries: Order["drinks"], struck: boolean) {
    return entries.map((entry) => {
      const item = document.createElement("li");
      item.append(copyIcon(entry.icon, struck), entry.text);
      return item;
    });
  }

  function fill(order: Order) {
    const initial = order.lastName && `${order.lastName[0]}.`;
    slot("name").textContent =
      [order.firstName, initial].filter(Boolean).join(" ") || EMPTY;

    const guests = Number(order.rsvp);
    slot("guests").textContent = guests > 0 ? String(guests) : EMPTY;
    for (const stamp of stamps) {
      stamp.hidden = stamp.dataset.rsvp !== order.rsvp;
    }

    slot("arrival").textContent = order.arrival?.text ?? EMPTY;
    slot("stay").textContent = order.stay?.text ?? EMPTY;
    slot("drinks").replaceChildren(...listOf(order.drinks, false));
    slot("no-drinks").hidden = order.drinks.length > 0;
    slot("allergies").replaceChildren(...listOf(order.allergies, true));
    slot("no-allergies").hidden = order.allergies.length > 0;
  }

  function feedOut(from: number, to: number) {
    const duration = Math.min(
      Math.max(Math.abs(to - from) * FEED_MS_PER_PX, FEED_MIN_MS),
      FEED_MAX_MS,
    );
    feed = sheet.animate(
      { height: [`${from}px`, `${to}px`] },
      { duration, easing: "cubic-bezier(0.3, 0, 0.3, 1)" },
    );
    return feed;
  }

  if (root.dataset.source === "saved") {
    const order = recallOrder();
    if (!order) {
      return;
    }

    fill(order);
    root.hidden = false;

    if (reducedMotion.matches) {
      return;
    }

    const brand = root.querySelector<HTMLElement>(".brand")!;
    const printing = feedOut(
      brand.offsetTop + brand.offsetHeight,
      sheet.offsetHeight,
    );
    printing.pause();

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          printing.play();
        }
      },
      { threshold: 1 },
    );

    observer.observe(root.querySelector(".paper")!);
    return;
  }

  const form = root.closest("form")!;
  function render() {
    const from = sheet.offsetHeight;
    feed?.cancel();

    fill(readOrder(form));

    const to = sheet.offsetHeight;
    if (from === to || reducedMotion.matches) {
      return;
    }
    feedOut(from, to);
  }

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  keepOrderOnSubmit(form);
  render();
  root.hidden = false;
}
