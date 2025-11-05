"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <motion.section
      className="
        relative overflow-hidden text-center
        max-w-7xl mx-auto px-6 py-32
        bg-[var(--color-bg-hero)]
        transition-colors duration-500
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
    >
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[var(--color-tech-bg)]
          via-transparent
          to-[var(--color-cinema-bg)]
          opacity-50 pointer-events-none
        "
      />
      <div className="relative z-10 space-y-6">
        <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold text-[var(--color-text)] text-on-dark">
          Journal
        </h1>
        <p className="font-inter text-lg text-[var(--color-subtext)] max-w-2xl mx-auto subtext-on-dark">
          Stories, insights, and experiments at the intersection of code and cinema.
        </p>
      </div>
    </motion.section>
  );
}
