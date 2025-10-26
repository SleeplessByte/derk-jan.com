import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 21: </span>
            <span>Mouse, Touch, Joystick, Keyboard, ...</span>
          </h2>
        </header>
      </div>

      <p className="relative top-[-10%]">
        <a
          href="/talks/practically-accessible/microsite/screen-reader/minimal"
          target="_blank"
          data-astro-prefetch
        >
          Open the test page, again (in a new tab).
        </a>
      </p>

      <SlideFooter
        next="/talks/practically-accessible/22"
        nextCount={22}
        nextLabel={"a 30 second fix"}
      />
    </div>
  );
}
