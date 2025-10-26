import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 35: Guidelines</span>
          </h2>
        </header>

        <p>
          Follow the{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            data-astro-prefetch
          >
            Web Content Accessibility Guidelines
          </a>
        </p>

        <p>
          International standard how to make web content more accessible to
          people with disabilities.
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/36"
        nextCount={36}
        nextLabel={"one more thing"}
      />
    </div>
  );
}
