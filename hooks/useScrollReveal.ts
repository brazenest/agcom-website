"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export function useScrollReveal(
  options = { once: true, amount: 0.15 }
) {
  const ref = useRef(null);
  const inView = useInView(ref, options);

  const MotionDiv = motion.div;

  return {
    ref,
    MotionDiv,
    animation: {
      initial: { opacity: 0, y: 30 },
      animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
    },
  };
}
