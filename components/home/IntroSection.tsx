'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto bg-bg text-text"
    >
      {/* --- Left: portrait or ambient visual --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/assets/images/profile/alden.jpg"
            alt="Alden Gillespy portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {/* subtle filmic overlay tint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-muted/40 to-accent/30 mix-blend-overlay" />
        </div>
      </motion.div>

      {/* --- Right: text introduction --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="font-cinematic text-3xl md:text-4xl text-text font-semibold mb-6 leading-snug">
          I build things that look good and work beautifully.
        </h2>

        <p className="font-engineering text-text-secondary text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          I’m Alden Gillespy — a full-stack engineer and creative storyteller. I’m a multidisciplinary creator who bridges software development and visual art. My work focuses on building elegant systems, whether through React and Node or through a camera lens.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Primary CTA */}
          <Link
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-hover text-white font-engineering font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] shadow-md"
          >
            View My Work
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-text font-engineering font-medium hover:bg-surface transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

