"use client";

import { motion } from "framer-motion";

interface PageGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  animate?: boolean;
  className?: string;
}

export default function PageGrid({
  children,
  columns = 3,
  gap = "md",
  animate = true,
  className = "",
}: PageGridProps) {
  const gapClass =
    gap === "sm"
      ? "gap-6"
      : gap === "lg"
      ? "gap-16"
      : "gap-10"; // default = md

  const colClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <motion.div
      className={`grid ${colClass} ${gapClass} ${className}`}
      initial={animate ? { opacity: 0, y: 30 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={animate ? { once: true, amount: 0.2 } : undefined}
      transition={animate ? { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } : undefined}
    >
      {children}
    </motion.div>
  );
}
