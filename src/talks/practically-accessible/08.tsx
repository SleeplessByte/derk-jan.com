import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 8: Can we answer the question?</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        What's the status of <span aria-hidden="true">🎤</span> karaoke in
        Utrecht?
      </p>

      <SlideFooter
        next="/talks/practically-accessible/09"
        nextCount={9}
        nextLabel={"a second look"}
      />
    </div>
  );
}
