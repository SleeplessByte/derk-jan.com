import { SlideFooter } from "../../components/Slide/SlideFooter";
import statusIconsSrc from "./statusicons.png";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 27: </span>
            <span>Rules for colours</span>
          </h2>
        </header>

        <ul className="list-disc list-inside" style={{ paddingLeft: 0 }}>
          <li>
            Colour contrast of at least{" "}
            <span className="font-bold" style={{ color: "#555" }}>
              4.5:1
            </span>
          </li>
          <li>Colour is never the only indicator</li>
        </ul>

        <img
          src={statusIconsSrc.src}
          alt="Status icons that have a differentiating shape ánd colour"
        />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/28"
        nextCount={28}
        nextLabel={"am I on the right path?"}
      />
    </div>
  );
}
