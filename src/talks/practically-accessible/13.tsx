import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 13: </span>
          <span>This is not a checklist!</span>
        </h2>
      </header>

      <SlideFooter
        next="/talks/practically-accessible/14"
        nextCount={14}
        nextLabel={"landmarks"}
      />
    </div>
  );
}
