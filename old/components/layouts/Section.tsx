"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  ambient?: boolean;
}

export default function Section({ id, children, className = "", ambient = false }: SectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const blueY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const amberY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto ${className}`}
    >
      {ambient && (
        <>
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(58,167,255,0.06),transparent_60%)] blur-[60px]"
            style={{ y: blueY }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,156,74,0.06),transparent_60%)] blur-[60px]"
            style={{ y: amberY }}
          />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
