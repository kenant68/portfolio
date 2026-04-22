export default function About() {
  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 md:divide-x md:divide-burgundy">
          <div className="flex items-start justify-center md:pr-16">
            <span
              className="font-serif text-[12rem] leading-none text-burgundy font-normal select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
          </div>
          <div className="md:pl-16 flex items-center">
            <p className="font-sans text-xl text-ink leading-relaxed">
              Building things for the web — fast, clean, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
