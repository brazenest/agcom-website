"use client";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[480px] md:h-[520px] lg:h-[560px] overflow-hidden rounded-3xl">
      {/* Stronger, palette-locked gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #2563EB 0%, #3B82F6 35%, #F59E0B 70%, #FBBF24 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Deep vignette for visual contrast */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.35)_85%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.6)_90%)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/textures/noise.png')" }}
      />

      {/* Ambient color layers (soft parallax) */}
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(37,99,235,0.35)" }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[180px] h-[180px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(251,191,36,0.3)" }}
        animate={{ x: [0, -70, 0], y: [0, 40, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
