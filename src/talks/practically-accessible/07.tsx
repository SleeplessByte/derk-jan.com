import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 7: The status page</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        <a
          href="/talks/practically-accessible/microsite/looks-fine/lacking#run"
          target="_blank"
          data-astro-prefetch
        >
          Open the test page (in a new tab).
        </a>
      </p>

      <SlideFooter
        next="/talks/practically-accessible/08"
        nextCount={8}
        nextLabel={"answering the question"}
      />
    </div>
  );
}
