import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 3: My work</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        <strong>I deal with</strong> <br />a vast array of sectors,
        requirements, and goals.
        {/**
         * COVID-19 scanner app designed to reunite teams
         * Safety and Compliance management and automation software
         * Social Network for medical professionals
         * Movie Trailer recognition and GDPR compliant advertisements without consent requirement
         * Hit prediction of upcoming artists and playlist optimalisation of Dutch radio stations
         * Digital companion for universities' introductory periods
         */}
      </p>

      <SlideFooter
        next="/talks/practically-accessible/04"
        nextCount={4}
        nextLabel={"about today"}
      />
    </div>
  );
}
