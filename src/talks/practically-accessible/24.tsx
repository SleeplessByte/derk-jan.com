import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 24: </span>
            <span>What do 1 in 12 men have in common?</span>
          </h2>
        </header>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/25"
        nextCount={25}
        nextLabel={"colour blindness"}
      />
    </div>
  );
}
