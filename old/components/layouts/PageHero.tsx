"use client";

import { motion } from "framer-motion";

export default function PageHero() {
  return (
    <section className="relative overflow-hidden isolate flex flex-col justify-center items-center text-center py-32 md:py-40 lg:py-48">
      {/* ✨ Animated Background Layer */}
      <motion.div
        className="absolute inset-0 z-0 blur-2xl saturate-150 opacity-80"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-amber))",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20, /* or 12 */
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ✴ Overlay (darkens for contrast safety) */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10 pointer-events-none" />

      {/* ✴ Hero Content */}
      <div className="relative z-20 max-w-3xl px-6">
        <h1 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
          Engineering + Cinematic Storytelling
        </h1>
        <p className="font-inter text-lg text-white/90 mb-8 drop-shadow">
          Software • Video Production • Photography
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="/portfolio" className="btn btn-primary">
            View My Work
          </a>
          <a href="/about" className="btn btn-secondary">
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
