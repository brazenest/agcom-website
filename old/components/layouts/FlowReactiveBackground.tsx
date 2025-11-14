"use client";

import { motion, useMotionTemplate } from "framer-motion";
import { useFlowMotion } from "@/hooks/useFlowMotion";

interface FlowReactiveBackgroundProps {
  variant?: "engineering" | "cinematic" | "hybrid";
  blur?: boolean;           // optional: adds subtle filmic blur
  opacity?: number;         // optional: control transparency
  zIndex?: string;          // optional: layering control
}

/**
 * A reusable animated gradient background that reacts to scroll direction & velocity.
 * Syncs perfectly with the site's motion system (useFlowMotion).
 */
export default function FlowReactiveBackground({
  variant = "hybrid",
  blur = false,
  opacity = 0.9,
  zIndex = "0",
}: FlowReactiveBackgroundProps) {
  const { bgPos, vibrance } = useFlowMotion();

  // Base gradient based on variant
  const baseGradient =
    variant === "engineering"
      ? "linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-tech-bg) 100%)"
      : variant === "cinematic"
      ? "linear-gradient(135deg, var(--color-cinema-bg) 0%, var(--color-accent-amber) 100%)"
      : "linear-gradient(135deg, var(--color-accent-blue) 0%, var(--color-accent-amber) 100%)";

  // Animated filter string
  const filter = useMotionTemplate`
    saturate(${vibrance})
    brightness(${vibrance})
    ${blur ? "blur(20px)" : ""}
  `;

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex,
        background: baseGradient,
        backgroundSize: "400% 400%",
        backgroundPosition: bgPos,
        filter,
        opacity,
      }}
    />
  );
}
