export default function Hero() {
  return (
    <section className="min-h-screen bg-cream flex flex-col justify-center px-8 md:px-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between pt-8 mb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink">Full Stack Dev</span>
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink">2026</span>
        </div>
        <hr className="border-ink/20 mb-16" />
        <h1 className="font-serif">
          <span className="block text-[5rem] sm:text-[8rem] md:text-[11rem] leading-none text-ink font-normal">
            TEKBAS
          </span>
          <span className="block text-[4rem] sm:text-[6rem] md:text-[9rem] leading-none text-ink italic font-normal mt-2">
            Kenan
          </span>
        </h1>
        <hr className="border-burgundy mt-8 mb-6" />
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-ink">
          Full Stack Developer
        </p>
      </div>
    </section>
  )
}
