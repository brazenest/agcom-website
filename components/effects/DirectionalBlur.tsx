"use client";

import { motion } from "framer-motion";

export function DirectionalBlur({
    children,
    direction = "x",
    distance = 50,
    blurAmount = 18,
    duration = 0.7,
}: any) {
    const initial = direction === "x" ? { x: -distance, filter: `blur(${blurAmount}px)` } : { y: -distance, filter: `blur(${blurAmount}px)` };
    const animate = { x: 0, y: 0, filter: "blur(0px)" };

    return (
        <motion.div
            initial={initial}
            animate={animate}
            transition={{
                duration,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
