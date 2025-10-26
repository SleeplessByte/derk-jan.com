import { ExternalLink } from "../../components/ExternalLink";
import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 5: Preparations</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        If you're re-watching this:
        <ExternalLink
          href="https://www.accessibility-developer-guide.com/setup/"
          target="_blank"
          inline
        >
          Complete the Accessibility Developer Guide setup
        </ExternalLink>
      </p>

      <SlideFooter
        next="/talks/practically-accessible/06"
        nextCount={6}
        nextLabel={"the story"}
      />
    </div>
  );
}
