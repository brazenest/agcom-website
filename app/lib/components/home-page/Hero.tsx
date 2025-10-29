"use client";

import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0B0C10] text-white overflow-hidden min-h-[560px]">
      {/* Background visuals (engineering + cinematic sides) */}
      <HeroBackground />

      {/* Content grid for layout / spacing / responsive order */}
      <div
        className="
          relative
          grid grid-cols-1 md:grid-cols-[60%_40%]
          min-h-[560px]
        "
      >
        {/* LEFT / ENGINEERING CONTENT */}
        <div
          className="
            relative
            flex flex-col justify-center
            px-8 py-12 md:py-16
            z-10
          "
        >
          <div className="max-w-xl">
            <h1
              className="font-bold leading-tight text-[#F5F6F8]"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "clamp(2.25rem, 2vw + 1rem, 3rem)",
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
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#4B6BFB]
              "
            >
              View My Work
            </button>
          </div>
        </div>

        {/* RIGHT / CINEMATIC CONTENT AREA (reserved) */}
        <div className="relative h-[360px] md:h-auto z-0 md:z-10">
          {/* currently decorative only;
             you can add highlight stats / role tags later */}
        </div>
      </div>
    </section>
  );
}
