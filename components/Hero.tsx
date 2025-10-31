import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      {/* 2-column on lg+, stacked on mobile. Visual is RIGHT on lg+ */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT: Headline + copy + CTAs */}
        <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left not-prose">
          <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold text-[#0B1B3A] dark:text-white">
            Engineering + Cinematic Storytelling
          </h1>

          {/* Paragraph stays neutral (not blue) */}
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Software • Video Production • Photography
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            {/* PRIMARY (white text is inline-styled so your global anchor color cannot override) */}
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium shadow-md transition-colors duration-300 bg-[#2563EB] hover:bg-[#1D4ED8]"
              style={{ color: "#fff" }} // <- hard force
            >
              View My Work
            </a>

            {/* SECONDARY (outline) */}
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium border-2 transition-colors duration-300 border-amber-500 text-amber-600 hover:border-amber-400 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT: Visual */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-[560px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
