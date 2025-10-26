import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 16: </span>
            <span>Screen Reader-only content</span>
          </h2>
        </header>

        <ToggleSrOnly />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/17"
        nextCount={17}
        nextLabel={"hiding irrelevant content"}
      />
    </div>
  );
}

function ToggleSrOnly() {
  return (
    <Toggle id="toggle-sr-only-code">
      <Toggle.Off>
        <Code language="html" caption="Before">
          {`
<div>
  <!-- just a green circle -->
  <span className="rounded-full w-4 h-4 bg-green-500 block" />



</div>`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="html" caption="After">
          {`
<div>
  <!-- just a green circle -->
  <span className="rounded-full w-4 h-4 bg-green-500 block" />

  <!-- screen reader content -->
  <span className="sr-only">available</span>
</div>`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
