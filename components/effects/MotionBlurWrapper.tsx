"use client";

import { motion, useVelocity, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function MotionBlurWrapper({
  children,
  intensity = 30,
  ...props
}) {
  const ref = useRef(null);
  const velocity = useVelocity(motion(ref).x); // Track x-axis velocity

  const spring = useSpring(velocity, { damping: 40, stiffness: 170 });
  const blur = useTransform(spring, [-600, 0, 600], [intensity, 0, intensity]);

  return (
    <motion.div
      ref={ref}
      style={{
        filter: blur.to((v) => `blur(${Math.abs(v)}px)`),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
