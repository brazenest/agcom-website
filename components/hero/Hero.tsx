"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax motion for ambient lighting
  const blueY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const amberY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const blueOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.03]);
  const amberOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.03]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 md:px-10 overflow-hidden"
    >
      {/* --- Ambient cinematic lighting layers --- */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(58,167,255,1),transparent_60%)] blur-[80px]"
        style={{ y: blueY, opacity: blueOpacity }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_65%,rgba(255,156,74,1),transparent_60%)] blur-[80px]"
        style={{ y: amberY, opacity: amberOpacity }}
      />

      {/* --- Text content --- */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-[var(--font-cinema)] text-4xl md:text-6xl lg:text-7xl font-semibold relative z-10 leading-tight bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] bg-clip-text text-transparent"
      >
        Engineering + Cinematic Storytelling
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="mt-6 max-w-2xl font-[var(--font-engineering)] text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed relative z-10"
      >
        Software • Video Production • Photography
      </motion.p>

      {/* --- CTA button --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="mt-10 relative z-10"
      >
        <Link
          href="#work"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-[var(--color-text-inverse)] font-[var(--font-engineering)] font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:shadow-[var(--shadow-soft)]"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
