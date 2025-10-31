"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function FeaturedWork() {
  const works = [
    {
      id: "tech",
      title: "DNA Activation Platform",
      subtitle:
        "A high-performance React platform powering consumer DNA kit activations at scale.",
      href: "/work/dna-platform",
      gradient: "gradient-tech",
    },
    {
      id: "cinema",
      title: "Cinematic Showreel",
      subtitle:
        "A curated reel blending technology, motion, and storytelling through light and rhythm.",
      href: "/work/showreel",
      gradient: "gradient-cinema",
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-center text-[#0B1B3A] dark:text-white mb-16">
        Featured Work
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {works.map((work, i) => (
          <GradientCard key={work.id} work={work} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function GradientCard({ work, delay }: any) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 220, damping: 25 });
  const springY = useSpring(y, { stiffness: 220, damping: 25 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const lightGradient = {
    background: `radial-gradient(circle at ${springX.get() * 100}% ${
      springY.get() * 100
    }%, rgba(255,255,255,0.3), transparent 70%)`,
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${work.gradient}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
    >
      {/* Lighting overlay */}
      {hovered && (
        <motion.div
          className="absolute inset-0 z-0 mix-blend-overlay pointer-events-none"
          style={lightGradient}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      )}

      {/* Cinematic overlay for depth */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/10 dark:group-hover:bg-black/20" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white space-y-3">
        <motion.h3
          className="font-space-grotesk text-2xl md:text-3xl font-semibold drop-shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          {work.title}
        </motion.h3>
        <p className="text-sm md:text-base text-white/90 max-w-md leading-relaxed">
          {work.subtitle}
        </p>
        <Link
          href={work.href}
          className="mt-4 inline-block self-start border border-white/30 hover:border-white/60 text-white/90 hover:text-white rounded-lg px-5 py-2 transition-all duration-200 text-sm font-medium"
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
}
