import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 41:</span>
            <span>I need more convincing</span>
          </h2>
        </header>

        <p>It's unprofessional</p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/42"
        nextCount={42}
        nextLabel={"final words"}
      />
    </div>
  );
}
