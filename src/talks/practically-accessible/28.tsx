import { SlideFooter } from "../../components/Slide/SlideFooter";
export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 28: </span>
            <span>How do I know what I am doing is right?</span>
          </h2>
        </header>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/29"
        nextCount={29}
        nextLabel={"some options"}
      />
    </div>
  );
}
