import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 11: the answer</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        <em>430 seconds</em>. That's just over <strong>7 minutes</strong>.
      </p>

      <SlideFooter
        next="/talks/practically-accessible/12"
        nextCount={12}
        nextLabel={"the work"}
      />
    </div>
  );
}
