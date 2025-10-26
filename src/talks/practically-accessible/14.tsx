import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 14: </span>
            <span>Landmarks</span>
          </h2>
        </header>

        {/**
         * Screenreaders allow you to navigate using landmarks.
         *
         * Landmarks include navigation sections, forms, regions such as
         * labelled sections, asides, search, and the main footer.
         */}

        <ToggleLandmarksCode />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/15"
        nextCount={15}
        nextLabel={"using headings"}
      />
    </div>
  );
}

function ToggleLandmarksCode() {
  return (
    <Toggle id="toggle-landmarks-code">
      <Toggle.Off>
        <Code language="html" caption="Before">
          {`
<div>
  <div>
    <div> <!-- no landmark -->
      <a href="https://example.org/"> Home </a>
      <a href="#content"> Status </a>`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="html" caption="After">
          {`
<div>
  <div>
    <nav> <!-- landmark -->
      <a href="https://example.org/"> Home </a>
      <a href="#content"> Status </a>`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
