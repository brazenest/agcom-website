"use client";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useEffect } from "react";

export default function HeroVisual() {
  const hue = useMotionValue(0);
  const background = useTransform(
    hue,
    (v) => `linear-gradient(90deg, hsl(${210 + v},70%,55%), hsl(${45 + v},90%,55%))`
  );

  // subtle continuous hue rotation
  useAnimationFrame((t) => {
    hue.set((t / 10000) % 360);
  });

  useEffect(() => {
    document.documentElement.style.setProperty("--noise", "url('/textures/noise.png')");
  }, []);

  return (
    <div className="relative w-full h-[480px] md:h-[520px] lg:h-[560px] overflow-hidden rounded-3xl">
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ background }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Light ↔ Dark overlays */}
      <div className="absolute inset-0 mix-blend-overlay
        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.3)_80%)]
        dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.8)_90%)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: "var(--noise)",
          backgroundSize: "auto",
        }}
      />

      {/* Animated color orbs */}
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full bg-blue-500/30 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[180px] h-[180px] rounded-full bg-amber-400/25 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center accent ring */}
      <motion.div
        className="relative z-10 w-40 h-40 border border-white/30 dark:border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
