import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 36: One more thing</span>
            <span>How do I convince my ...?</span>
          </h2>
        </header>

        <p className="font-extrabold text-center" style={{ fontSize: 72 }}>
          &nbsp;
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/37"
        nextCount={37}
        nextLabel={"the answer"}
      />
    </div>
  );
}
