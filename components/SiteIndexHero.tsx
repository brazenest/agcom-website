"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // hero responds as it leaves viewport
  });

  // map scroll position to slight gradient shifts
  const blueY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const amberY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const blueOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.02]);
  const amberOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.02]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden"
    >
      {/* Ambient gradient layers */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(58,167,255,1),transparent_60%)]"
        style={{
          y: blueY,
          opacity: blueOpacity,
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,156,74,1),transparent_60%)]"
        style={{
          y: amberY,
          opacity: amberOpacity,
          filter: "blur(60px)",
        }}
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-cinema text-5xl md:text-6xl font-semibold text-gradient relative z-10"
      >
        Engineering + Cinematic Storytelling
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="mt-6 max-w-xl text-[var(--color-text-secondary)] text-lg relative z-10"
      >
        Software • Video Production • Photography
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="mt-10 relative z-10"
      >
        <Link href="#work" className="btn">
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
