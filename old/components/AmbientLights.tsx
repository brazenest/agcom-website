"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AmbientLights({
  blue = "rgba(58,167,255,1)",
  amber = "rgba(255,156,74,1)",
}: {
  blue?: string;
  amber?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blueShift = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const amberShift = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${blue}, transparent 60%)`,
          y: blueShift,
          opacity: 0.06,
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 60%, ${amber}, transparent 60%)`,
          y: amberShift,
          opacity: 0.06,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
