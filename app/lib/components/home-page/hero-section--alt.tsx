// app/components/HeroSplitConceptB.tsx
"use client";
import Image from "next/image";

export default function HeroSplitConceptB() {
  return (
    <section className="relative w-full bg-[#0B0C10] text-white overflow-hidden">
      <div className="
        grid grid-cols-1
        md:grid-cols-[60%_40%]
        min-h-[560px]
      ">

        {/* LEFT: ENGINEERING SIDE */}
        <div
          className="
            relative flex flex-col justify-center
            px-8 py-12 md:py-16
          "
          style={{
            backgroundColor: "#0B0C10",
            boxShadow: "inset -32px 0 64px rgba(0,0,0,0.6)",
          }}
        >
          {/* Content block */}
          <div className="max-w-xl relative z-10">
            <h1
              className="font-bold leading-tight text-[#F5F6F8]"
              style={{
                fontSize: "clamp(2.25rem, 2vw + 1rem, 3rem)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Engineering +<br />
              Cinematic Storytelling
            </h1>

            <p className="mt-4 text-[#C6C8CE] text-base leading-relaxed">
              Software • Video Production • Photography
            </p>

            <button
              className="
                mt-8
                bg-[#1E3A8A] hover:bg-[#153070]
                text-white font-semibold text-base
                px-6 py-3 rounded-md
                shadow-[0_24px_48px_rgba(30,58,138,0.5)]
                transition-transform duration-200
                hover:-translate-y-0.5
              "
            >
              View My Work
            </button>
          </div>

          {/* AI-ish network overlay for tech credibility */}
          <div
            className="
              absolute inset-0
              opacity-[0.15]
              pointer-events-none
              bg-[url('/ai-lines-overlay.svg')]
              bg-cover bg-center
            "
          />
        </div>

        {/* RIGHT: CINEMATIC SIDE */}
        <div className="relative h-[360px] md:h-auto overflow-hidden">
          {/* Desktop / tablet / mobile background image */}
          <Image
            src="/hero-b-desktop.jpg"
            alt="Cinematic framing / creative identity"
            fill
            className="
              object-cover object-center
              opacity-90
            "
            priority
          />

          {/* Leftward darkening so text always wins */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-l
              from-transparent
              to-[#0B0C10]/60
            "
          />

          {/* Optional warm streak layer */}
          <div
            className="
              absolute inset-0
              pointer-events-none
              mix-blend-screen
            "
            style={{
              background:
                "radial-gradient(circle at 70% 40%, rgba(213,133,62,0.35) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
