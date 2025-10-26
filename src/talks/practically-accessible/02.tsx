import { SlideFooter } from "../../components/Slide/SlideFooter";
import { ExternalLink } from "../../components/ExternalLink";
import { DelftSolutionsLogo } from "../../components/DelftSolutionsLogo";

export default function Page() {
  return (
    <div id="works-at">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 2: I work at</span>
        </h2>
      </header>

      <figure className="relative top-[-10%]">
        <DelftSolutionsLogo />
        <figcaption>
          A Dutch software agency for consultancy, custom software, and more.
        </figcaption>
      </figure>

      <div className="text-center">
        <ExternalLink href="https://delftsolutions.nl" target="_blank">
          Read more on delftsolutions.nl
        </ExternalLink>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/03"
        nextCount={3}
        nextLabel={"my work"}
      />
    </div>
  );
}
