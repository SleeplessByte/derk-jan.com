import { ExternalLink } from "../../components/ExternalLink";
import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 23: </span>
            <span>
              <span aria-hidden="true">😭</span>My designer hates me
            </span>
          </h2>
        </header>

        <ExternalLink href="https://www.sarasoueidan.com/blog/focus-indicators/">
          Sara Soueidan: A guide to designing accessible, WCAG-compliant focus
          indicators
        </ExternalLink>
        <br />
        <a
          href="/talks/practically-accessible/microsite/screen-reader/outlines"
          target="_blank"
        >
          Example implementation (in a new tab).
        </a>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/24"
        nextCount={24}
        nextLabel={"1 in 12 men"}
      />
    </div>
  );
}
