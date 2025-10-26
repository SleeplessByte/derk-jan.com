import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 4: About today</span>
        </h2>
      </header>

      <p className="relative top-[-10%]">
        About today
        {/**
         * I usually speak on this subject in groups less familiar with
         * accessibility; sometimes people don't even know it's not some magic
         * spell only known to wizard suprémes, which I hope is not the case
         * with today's audience. If you're watching this talk today or at a
         * later time, you've already made the first steps yourself to "care".
         *
         * However, preparing for this talk, I found that the majority of people
         * that I surround myself with, even those who write or attempt to write
         * accessible software may still experience something new listening to
         * this talk.
         *
         * I will not give you a checklist of things you must change, or a list
         * of common myths debunked. Those talks exist. These lists you can
         * Google, and at the end of this slide deck I will share some of the
         * resources that I have used myself.
         *
         * No, today my goal is to spark your interest in such a way, so that
         * tomorrow you'll want to make your first purposefully accessible and
         * inclusive change; you'll try to include one of the tools or
         * practices in your own workflow, or at the bare minimum you think or
         * look back at this talk because it starting to live a bit for you
         * as well.
         *
         * And for those accessibility advocates among us (I know you're there)
         * thank you for being you. If you find at least one thing interesting
         * in the following twenty minutes, I'm happy with that too, and feel
         * free to incorporate it in your own advocacy.
         *
         * How better to understand something better than to experience it?
         */}
      </p>

      <SlideFooter
        next="/talks/practically-accessible/05"
        nextCount={5}
        nextLabel={"preparations"}
      />
    </div>
  );
}
