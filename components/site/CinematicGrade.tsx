"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/components/providers/SectionProvider";

export function CinematicGrade() {
    const active = useActiveSection();

    return (
        <AnimatePresence>
            <motion.div
                key={active + "-grade"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.19, 1, 0.22, 1],
                }}
                className="
          fixed inset-0 pointer-events-none -z-30
          mix-blend-soft-light
          backdrop-contrast-125
          transition-all
        "
                style={{
                    background: `
            radial-gradient(ellipse at 40% 30%,
              rgba(58,156,255,0.12),
              transparent 70%
            ),
            radial-gradient(ellipse at 70% 60%,
              rgba(255,156,74,0.10),
              transparent 70%
            )
          `,
                }}
            />
        </AnimatePresence>
    );
}
