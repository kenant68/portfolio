export default function Hero() {
  return (
    <section className="min-h-screen dot-grid flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-pixel leading-tight">
        <span className="block text-5xl md:text-7xl text-[#FF2D78]">TEKBAS</span>
        <span
          className="block text-5xl md:text-7xl text-[#F9FF00] mt-4"
          style={{ WebkitTextStroke: '2px #111111' }}
        >
          Kenan
        </span>
      </h1>
      <p className="font-sans text-sm uppercase tracking-[0.4em] text-[#111111] mt-10">
        Full Stack Developer<span className="blink ml-1">_</span>
      </p>
    </section>
  )
}
