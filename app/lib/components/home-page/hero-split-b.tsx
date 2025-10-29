"use client";

import Image from "next/image";

export default function HeroSplitB() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col bg-black text-zinc-100 md:min-h-[90vh] md:flex-row">
      {/* LEFT SIDE — TECH / ENGINEERING */}
      <div className="relative flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-12 lg:px-20">
        {/* abstract geometric overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/heroB/ai-overlay.svg')] bg-[length:120%_120%] bg-center opacity-10" />

        <div className="relative z-10 max-w-xl">
          <h1 className="font-bold leading-[1.05] tracking-[-0.03em] text-4xl sm:text-5xl lg:text-6xl">
            <span className="block font-[var(--font-tech)] uppercase">
              Engineering&nbsp;+
            </span>
            <span className="block font-[var(--font-cinema)]">
              Cinematic&nbsp;Storytelling
            </span>
          </h1>

          <p className="mt-6 text-sm font-[var(--font-tech)] tracking-[0.1em] text-zinc-400 uppercase">
            Software • Video Production • Photography
          </p>

          <button
            className="mt-8 inline-flex items-center justify-center rounded-xl
              border border-zinc-700/60 bg-zinc-900/60 px-5 py-3
              text-sm font-semibold text-zinc-100 ring-1 ring-white/5
              transition hover:bg-zinc-800/80 hover:border-zinc-500/60
              focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — CREATIVE / CINEMATIC */}
      <div className="relative w-full md:w-1/2">
        {/* portrait background */}
        <Image
          src="/heroB/portrait.jpg"
          alt="Portrait of Alden Gillespy in cinematic lighting"
          fill
          className="object-cover object-center"
          priority
        />

        {/* light-leak overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,100,40,0.3)_0%,transparent_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,180,255,0.2)_0%,transparent_70%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-10 right-10 z-10 text-right font-[var(--font-tech)] tracking-[0.15em] text-zinc-300">
          ALDEN GILLESPY
        </div>
      </div>
    </section>
  );
}
