"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function ParallaxLights() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

    // Parallax offsets
    const light1X = useTransform(smoothX, [0, 1], ["-10%", "10%"]);
    const light1Y = useTransform(smoothY, [0, 1], ["-10%", "10%"]);
    const light2X = useTransform(smoothX, [0, 1], ["10%", "-10%"]);
    const light2Y = useTransform(smoothY, [0, 1], ["5%", "-5%"]);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            {/* Engineering blue light */}
            <motion.div
                style={{ x: light1X, y: light1Y }}
                className="
          absolute w-[40vw] h-[40vw]
          -top-32 -left-32
          rounded-full
          bg-brand-400/22
          blur-3xl
          mix-blend-screen
        "
            />
            {/* Cinematic amber light */}
            <motion.div
                style={{ x: light2X, y: light2Y }}
                className="
          absolute w-[45vw] h-[45vw]
          -bottom-40 -right-40
          rounded-full
          bg-dark-brand-500/18
          blur-3xl
          mix-blend-screen
        "
            />
        </div>
    );
}
