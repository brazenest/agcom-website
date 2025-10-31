"use client";

import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Desktop / Tablet composite */}
      <div className="hidden md:block absolute inset-0">
        {/* LEFT ENGINEERING HALF */}
        <div className="absolute inset-y-0 left-0 w-[60%] overflow-hidden">
          {/* Base engineering panel */}
          <Image
            src="/assets/images/home-page/hero-engineering-bg.png"
            alt="Engineering panel background"
            fill
            className="
              object-cover object-center
              brightness-[0.9] saturate-[0.9]
            "
            priority
          />

          {/* Cyan grid overlay, subtle glow */}
          <Image
            src="/assets/images/home-page/hero-engineering-overlay.png"
            alt="Engineering network overlay"
            fill
            className="
              object-cover object-center
              opacity-[0.18]
              mix-blend-screen
              pointer-events-none
            "
          />
        </div>

        {/* RIGHT CINEMATIC HALF */}
        <div className="absolute inset-y-0 right-0 w-[40%] overflow-hidden">
          <Image
            src="/assets/images/home-page/hero-cinematic-bg.png"
            alt="Cinematic panel background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>

        {/* Soft cinematic amber flare on the right */}
        <div
          className="absolute inset-y-0 right-0 w-[40%] pointer-events-none mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(213,133,62,0.32) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Dark fade left→right to protect text legibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0C10]/60 pointer-events-none" />
      </div>

      {/* Mobile unified background (3:4 vertical blend) */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/assets/images/home-page/hero-mobile.png"
          alt="Mobile hero background"
          fill
          className="
            object-cover object-center
            brightness-[0.9] saturate-[0.9]
          "
          priority
        />

        {/* Extra darkening at bottom for CTA legibility on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/20 via-transparent to-[#0B0C10]/60 pointer-events-none" />
      </div>
    </div>
  );
}
