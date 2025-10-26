import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 31: Automation and tooling!</span>
          </h2>
        </header>

        <p className="text-center">
          Remember less than 50% of issues can be (automatically) detected
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/32"
        nextCount={32}
        nextLabel={"developer tools"}
      />
    </div>
  );
}
