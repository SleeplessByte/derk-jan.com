import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 33: Guides</span>
          </h2>
        </header>

        <p>
          Follow the{" "}
          <a
            href="https://www.accessibility-developer-guide.com/"
            target="_blank"
            data-astro-prefetch
          >
            Accessibility Developer Guide
          </a>
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/34"
        nextCount={34}
        nextLabel={"more guides"}
      />
    </div>
  );
}
