import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 37: One more thing</span>
            <span>How do I convince my ...?</span>
          </h2>
        </header>

        <p className="font-extrabold text-center" style={{ fontSize: 72 }}>
          You don't
        </p>

        {/**
         * - accessibility is not a line item on an invoice
         * - ... or a checkbox in a feature list
         * - it is simply unprofessional to not be inclusive
         *
         * - dear employees, if you don't have support in your company, and
         *   there is no accessibility advocate, don't burn yourself out. leave
         *   (if you can)
         *
         * - dear clients, expect more
         *
         * - dear bosses, do better and stop trying to compete with those who
         *   cut corners. ignoring accessibility is cutting corners with real
         *   implications.
         **/}
      </div>

      <SlideFooter
        next="/talks/practically-accessible/38"
        nextCount={38}
        nextLabel={"I need more convincing"}
      />
    </div>
  );
}
