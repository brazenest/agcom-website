"use client";
import { motion } from "framer-motion";
import HeroBackground from "./home-page/HeroBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-start justify-center h-[90vh] px-6 md:px-20 bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* <HeroBackground /> */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
      >
        Engineering + Cinematic Storytelling
      </motion.h1>

      <p className="mt-4 text-lg text-[var(--color-subtext)]">
        Software • Video Production • Photography
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 px-6 py-3 bg-[var(--color-accent-blue)] text-white font-bold rounded-xl shadow-soft hover:shadow-strong transition"
      >
        View My Work
      </motion.button>

      
    </section>
  );
}
