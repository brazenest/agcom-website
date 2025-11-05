"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSplit() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // subtle parallax motion for both halves
  const techShift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const cinemaShift = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh] overflow-hidden"
    >
      {/* --- Left (Engineering) --- */}
      <motion.div
        style={{ y: techShift }}
        className="relative flex items-center justify-center bg-[var(--color-surface)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(58,167,255,0.08),transparent_60%)] blur-[80px]" />
        <div className="relative z-10 text-center px-8 py-24 md:py-0">
          <h1 className="font-[var(--font-cinema)] text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-text-primary)] bg-clip-text text-transparent leading-tight">
            Engineering
          </h1>
          <p className="mt-4 font-[var(--font-engineering)] text-[var(--color-text-secondary)] text-lg md:text-xl max-w-md mx-auto">
            Building reliable systems with precision and creativity.
          </p>
        </div>
      </motion.div>

      {/* --- Right (Cinematic) --- */}
      <motion.div
        style={{ y: cinemaShift }}
        className="relative flex items-center justify-center bg-[var(--color-surface-alt)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,156,74,0.08),transparent_60%)] blur-[80px]" />
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/hero/cinematic-overlay.jpg')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-8 py-24 md:py-0">
          <h1 className="font-[var(--font-cinema)] text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-[var(--color-accent-amber)] to-[var(--color-text-primary)] bg-clip-text text-transparent leading-tight">
            Storytelling
          </h1>
          <p className="mt-4 font-[var(--font-engineering)] text-[var(--color-text-secondary)] text-lg md:text-xl max-w-md mx-auto">
            Capturing emotion through motion, light, and rhythm.
          </p>
        </div>
      </motion.div>

      {/* --- Center overlay / tagline --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <p className="font-[var(--font-engineering)] text-sm tracking-wide text-[var(--color-text-secondary)] uppercase mb-4">
          Alden Gillespy
        </p>
        <h2 className="font-[var(--font-cinema)] text-3xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-primary)] leading-snug max-w-3xl">
          Engineering + Cinematic Storytelling
        </h2>
        <Link
          href="#work"
          className="pointer-events-auto mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-[var(--color-text-inverse)] font-[var(--font-engineering)] font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:shadow-[var(--shadow-soft)]"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
