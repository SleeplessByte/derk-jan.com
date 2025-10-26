import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 9: A second look</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">Looks can be deceiving!.</p>
      <p>
        <a
          href="/talks/practically-accessible/microsite/looks-fine/bright#run"
          target="_blank"
          data-astro-prefetch
        >
          Open the test page again (in a new tab).
        </a>
      </p>

      <SlideFooter
        next="/talks/practically-accessible/10"
        nextCount={10}
        nextLabel={"question time"}
      />
    </div>
  );
}
