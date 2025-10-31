"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center py-32 px-6 md:px-20 bg-[var(--color-surface)] text-[var(--color-text)] overflow-hidden"
    >
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-tech-bg)]/60 to-[var(--color-cinema-bg)]/60 opacity-70 pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl md:text-5xl font-bold mb-6 relative z-10"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="max-w-3xl text-lg md:text-xl text-[var(--color-subtext)] leading-relaxed relative z-10"
      >
        I’m a multidisciplinary creator and full-stack engineer who bridges technology and
        cinematic design. My work spans software systems, film-style production, and visual
        storytelling — combining clean engineering logic with the emotional impact of art.
        I believe every product, no matter how technical, benefits from narrative thinking
        and aesthetic coherence.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 max-w-3xl text-lg md:text-xl text-[var(--color-subtext)] leading-relaxed relative z-10"
      >
        With experience in React, Node.js, TypeScript, and cloud infrastructure, I’ve
        delivered performant platforms used by thousands daily — while my camera and
        editing work explore light, motion, and human emotion. The intersection of these
        disciplines is where I’m most at home.
      </motion.p>
    </section>
  );
}
