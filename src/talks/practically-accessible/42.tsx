export default function Page() {
  return (
    <div>
      <div className="relative">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 42: final words</span>
          </h2>
        </header>

        <blockquote className="p-4 bg-pink-50 dark:bg-black/50 rounded-lg text-pink-700 dark:text-pink-300 max-w-xl font-bold">
          The power of the Web is in its universality. Access by everyone
          regardless of disability is an essential aspect.
          <br />
          <em className="block mt-2 text-zinc-900 dark:text-zinc-100 font-normal">
            <span aria-hidden="true">-</span> Tim Berners-Lee, W3C Director and
            inventor of the World Wide Web
          </em>
        </blockquote>
      </div>
    </div>
  );
}
