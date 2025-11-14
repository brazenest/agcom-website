"use client";

import { motion } from "framer-motion";

interface AboutCardProps {
  skill: {
    title: string;
    text: string;
    icon?: React.ReactNode;
    category?: "engineering" | "cinematic" | "hybrid";
  };
  index?: number;
}

export default function AboutCard({ skill, index = 0 }: AboutCardProps) {
  const gradientClass =
    skill.category === "engineering"
      ? "gradient-tech"
      : skill.category === "cinematic"
      ? "gradient-cinema"
      : "bg-[var(--color-surface)]";

  return (
    <motion.div
      className={`
        relative flex flex-col items-start justify-start rounded-2xl overflow-hidden
        p-8 shadow-lg transition-all duration-500
        ${gradientClass}
        group
      `}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      {/* Gradient overlay for cinematic tone */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

      {/* Icon */}
      {skill.icon && (
        <div className="relative z-10 mb-6 text-4xl text-white/90 drop-shadow-md">
          {skill.icon}
        </div>
      )}

      {/* Text content */}
      <div className="relative z-10">
        <h3 className="font-space-grotesk text-2xl font-bold text-white drop-shadow-sm mb-3">
          {skill.title}
        </h3>
        <p className="font-inter text-white/90 text-sm leading-relaxed">
          {skill.text}
        </p>
      </div>

      {/* Edge light border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}
