"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = true, className }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      className={`bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-xl p-6 shadow-[var(--shadow-soft)] hover:bg-[var(--color-surface-alt)] hover:shadow-[var(--shadow-strong)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
