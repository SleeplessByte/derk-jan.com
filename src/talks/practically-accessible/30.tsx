import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 30: Watch another talk!</span>
          </h2>
        </header>

        <p>
          Watch{" "}
          <a
            href="https://www.youtube.com/watch?v=eZnTIPQ4UuA"
            target="_blank"
            data-astro-prefetch
          >
            Testing Web Accessibility
          </a>{" "}
          by Adrián Bolonio
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/31"
        nextCount={31}
        nextLabel={"automated tooling"}
      />
    </div>
  );
}
