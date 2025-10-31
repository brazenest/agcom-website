'use client';

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ======================================================
   CINEMATIC SMALL PROJECT CARDS
   ====================================================== */
export default function ProjectCardSmall({ href, imgSrc, label, title, blurb, tech }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [3, -3]);
  const rotateY = useTransform(x, [0, 1], [-3, 3]);

  return (
    <Link href={href}>
      <motion.div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const posX = (e.clientX - rect.left) / rect.width;
          const posY = (e.clientY - rect.top) / rect.height;
          x.set(posX);
          y.set(posY);
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="
          group relative overflow-hidden rounded-2xl
          bg-[var(--color-card-bg)]
          border border-[var(--color-border)]
          shadow-[0_30px_60px_var(--color-shadow)]
          flex flex-col min-h-[240px]
          transition-transform duration-300
          will-change-transform
          perspective-[1000px]
        "
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dynamic light */}
        {hovered && (
          <motion.div
            style={{
              background: `radial-gradient(
                circle at ${x.get() * 100}% ${y.get() * 100}%,
                rgba(255,255,255,0.15) 0%,
                transparent 60%
              )`,
            }}
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
          />
        )}

        {/* Reflection sheen (opposite cursor) */}
        {hovered && (
          <motion.div
            style={{
              background: `linear-gradient(
                120deg,
                rgba(255,255,255,0.04) 0%,
                rgba(255,255,255,0.1) 30%,
                transparent 80%
              )`,
              backgroundPosition: `${(1 - x.get()) * 100}% ${(1 - y.get()) * 100}%`,
              backgroundSize: "200% 200%",
            }}
            animate={{
              opacity: hovered ? 1 : 0,
              backgroundPosition: `${(1 - x.get()) * 100}% ${(1 - y.get()) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none mix-blend-soft-light"
          />
        )}

        {/* Color gradient */}
        <div
          className="
            absolute inset-0 opacity-60
            mix-blend-screen transition-opacity duration-500
            group-hover:opacity-80
          "
          style={{
            background:
              "linear-gradient(90deg, var(--color-gradient-left) 0%, var(--color-gradient-right) 100%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.7)_70%)] opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Text */}
        <div className="relative z-10 p-5 md:p-6 mt-auto flex flex-col gap-2">
          <div className="text-[0.7rem] uppercase tracking-wide text-[var(--color-subtext)] font-medium">
            {label}
          </div>
          <h4 className="text-[var(--color-text)] font-semibold text-base md:text-lg leading-tight">
            {title}
          </h4>
          <p className="text-[var(--color-subtext)] text-[0.85rem] leading-relaxed">
            {blurb}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  text-[0.65rem] font-medium
                  text-white/90 bg-white/10
                  rounded-md px-2 py-1 border border-white/10 backdrop-blur-[2px]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
