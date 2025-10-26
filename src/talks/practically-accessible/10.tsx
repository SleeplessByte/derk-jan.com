import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 10: </span>
          <span>Question time!</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        How long does it take to make this page adequately screen-reader
        accessible?
      </p>

      <SlideFooter
        next="/talks/practically-accessible/11"
        nextCount={11}
        nextLabel={"answering the question"}
      />
    </div>
  );
}
