'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function SiteIndexHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Gradient motion (slight parallax drift)
  const blueY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const amberY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const fadeOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.02]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden bg-bg text-text"
    >
      {/* Ambient gradient layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, var(--color-accent-muted), transparent 60%)',
          y: blueY,
          opacity: fadeOpacity,
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 70% 60%, var(--color-accent), transparent 60%)',
          y: amberY,
          opacity: fadeOpacity,
          filter: 'blur(60px)',
        }}
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 font-cinematic text-5xl md:text-6xl font-semibold tracking-tight text-text"
      >
        Engineering + Cinematic Storytelling
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        className="mt-6 max-w-xl text-lg text-text-secondary relative z-10"
      >
        Software • Video Production • Photography
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="mt-10 relative z-10"
      >
        <Link
          href="#work"
          className="inline-block px-6 py-3 rounded-lg font-medium text-white bg-accent hover:bg-accent-hover transition-colors duration-200 shadow-md"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  );
}
