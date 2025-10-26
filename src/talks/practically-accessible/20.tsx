import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 20: </span>
            <span>Results in action</span>
          </h2>
        </header>
      </div>

      <p className="relative top-[-10%]">
        <a
          href="/talks/practically-accessible/microsite/screen-reader/minimal"
          target="_blank"
          data-astro-prefetch
        >
          Open the changed page (in a new tab).
        </a>
      </p>

      <SlideFooter
        next="/talks/practically-accessible/21"
        nextCount={21}
        nextLabel={"is there more to explore?"}
      />
    </div>
  );
}
