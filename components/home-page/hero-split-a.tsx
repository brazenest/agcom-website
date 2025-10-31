"use client";

import Image from "next/image";

export default function HeroSplitA() {
  return (
    <section className="relative flex min-h-[80vh] w-full flex-col bg-black text-zinc-100 md:min-h-[90vh] md:flex-row">
      {/* LEFT SIDE: Tech / Engineering */}
      <div className="relative flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-12 lg:px-20">
        {/* subtle synthetic texture overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(60,60,60,0.18)_0%,rgba(0,0,0,0)_60%)] [mask-image:radial-gradient(circle_at_30%_30%,rgba(255,255,255,1)_0%,transparent_70%)]" />

        {/* micro-noise layer for grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen [background-image:url('/heroA/tech-texture-noise.png')] [background-size:cover]" />

        <div className="relative z-10 max-w-xl">
          {/* Headline */}
          <h1 className="font-bold leading-[1.05] text-zinc-100 tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block font-[var(--font-tech)] uppercase">
              Engineering +
            </span>
            <span className="block font-[var(--font-cinema)]">
              Cinematic Storytelling
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base font-[var(--font-tech)] tracking-[0.08em] text-zinc-400 uppercase sm:text-sm">
            Software • Video Production • Photography
          </p>

          {/* CTA */}
          <button
            className="
              mt-8 inline-flex items-center justify-center
              rounded-xl border border-zinc-700/60 bg-zinc-900/60
              px-5 py-3 text-sm font-semibold text-zinc-100
              shadow-[0_12px_32px_rgba(0,0,0,0.8)]
              ring-1 ring-white/5
              transition
              hover:bg-zinc-800/80 hover:border-zinc-500/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.9)]
              focus:outline-none focus:ring-2 focus:ring-cyan-400/40
            "
          >
            View My Work
          </button>
        </div>

        {/* Name / sig for larger screens */}
        <div className="relative z-10 mt-10 hidden text-xs font-[var(--font-tech)] tracking-[0.2em] text-zinc-600 md:block">
          ALDEN GILLESPY
        </div>

        {/* edge gradient fade so split feels like 2 panels not 2 divs */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-24 bg-gradient-to-r from-black/0 to-black md:block" />
      </div>

      {/* RIGHT SIDE: Creative / Cinematic */}
      <div className="relative w-full md:w-1/2">
        {/* blurred motion video frame w/ red + teal streaks */}
        <Image
          src="/heroA/creative-blur-frame.jpg"
          alt="Cinematic motion blur frame in deep teal and ember orange"
          fill
          className="object-cover object-center opacity-90"
          priority
        />

        {/* dark overlay for contrast control */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,80,40,0.22)_0%,rgba(0,0,0,0)_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(0,140,200,0.18)_0%,rgba(0,0,0,0)_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-black/40 backdrop-contrast-[1.05]" />

        {/* Name lockup on the right */}
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="w-full px-6 py-8 text-right md:px-12 lg:px-20">
            <p
              className="
                text-4xl font-bold leading-[1.05] tracking-[-0.03em]
                text-zinc-100 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]
                sm:text-5xl lg:text-6xl
                font-[var(--font-tech)]
              "
            >
              ALDEN
              <br />
              GILLESPY
            </p>
          </div>
        </div>

        {/* subtle vertical divider glow on the left edge of this panel */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/30 via-white/60 to-orange-400/30 blur-[2px] md:block" />
      </div>
    </section>
  );
}
