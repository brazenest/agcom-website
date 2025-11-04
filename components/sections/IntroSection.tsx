"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* --- Left: portrait or ambient visual --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
          <Image
            src="/assets/images/profile/alden.jpg"
            alt="Alden Gillespy portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(58,167,255,0.25)] to-[rgba(255,156,74,0.25)] mix-blend-overlay" />
        </div>
      </motion.div>

      {/* --- Right: text introduction --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="font-[var(--font-cinema)] text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6 leading-snug">
          I build things that look good and work beautifully.
        </h2>

        <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          I’m Alden Gillespy — a full-stack engineer and creative storyteller. I’m a multidisciplinary creator who bridges software development and visual art. My work focuses on building elegant systems, whether through React and Node or through a camera lens.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-[var(--color-text-inverse)] font-[var(--font-engineering)] font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:shadow-[var(--shadow-soft)] !text-black"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-divider)] text-[var(--color-text-primary)] font-[var(--font-engineering)] font-medium hover:bg-[var(--color-surface-alt)] transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
