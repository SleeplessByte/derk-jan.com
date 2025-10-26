import { ExternalLink } from "../../components/ExternalLink";
import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 26:</span>
            <span>experience it using browser tools</span>
          </h2>
        </header>
      </div>

      <figure className="flex flex-col mx-auto items-center">
        <img
          src="https://images.unsplash.com/photo-1516434464077-12b1b87bb716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          width={1470 / 4}
          height={980 / 4}
          className="max-w-[50vw]"
          alt="Jewel beetles in various colours"
        />
        <figcaption>
          Photograph source:{" "}
          <ExternalLink inline href="https://unsplash.com/photos/GGewLGcQD-I">
            James Wainscoat on Unsplash
          </ExternalLink>
        </figcaption>
      </figure>

      <SlideFooter
        next="/talks/practically-accessible/27"
        nextCount={27}
        nextLabel={"Fixing the example"}
      />
    </div>
  );
}
