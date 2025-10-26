import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 6: The story</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        You've just moved. You want to make friends. You want to sing your heart
        out at <span aria-hidden="true">🎤</span> karaoke.
        <br />
        <br />
        <span>
          <span className="sr-only">You will look on the </span>
          <span aria-hidden="true">👀</span> Community Status Page
        </span>
      </p>

      <SlideFooter
        next="/talks/practically-accessible/07"
        nextCount={7}
        nextLabel={"the status page"}
      />
    </div>
  );
}
