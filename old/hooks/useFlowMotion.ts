"use client";

import {
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
  motionValue,
} from "framer-motion";
import { useState } from "react";

export function useFlowMotion() {
  const { scrollY } = useScroll();
  const [scrollDir, setScrollDir] = useState<"down" | "up">("down");
  const velocityMV = motionValue(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    const delta = latest - prev;
    setScrollDir(delta > 0 ? "down" : "up");
    velocityMV.set(Math.min(Math.abs(delta), 100));
  });

  const yMotion = useSpring(scrollY, { stiffness: 40, damping: 20 });
  const bgPos = useTransform(
    yMotion,
    [0, 1000],
    scrollDir === "down" ? ["0% 0%", "0% 200%"] : ["0% 200%", "0% 0%"]
  );
  const vibrance = useTransform(velocityMV, [0, 100], [1, 1.4]);

  return { scrollDir, velocity: velocityMV, bgPos, vibrance };
}
