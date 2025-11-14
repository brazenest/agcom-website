"use client";

import { motion, AnimatePresence } from "framer-motion";
import { sectionColors } from "@/lib/sectionColors";
import { useActiveSection } from "@/components/providers/SectionProvider";
import clsx from "clsx";

export function BackgroundTint() {
    const active = useActiveSection();
    const tint = sectionColors[active];

    return (
        <AnimatePresence>
            <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                    "fixed inset-0 -z-10 transition-colors duration-700",
                    tint.tintLight,
                    tint.tintDark
                )}
            />

            {/* Soft cinematic color overlay */}
            <motion.div
                key={active + "-overlay"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className={clsx(
                    "fixed inset-0 -z-20 pointer-events-none",
                    tint.tintOverlayLight,
                    tint.tintOverlayDark
                )}
            />
        </AnimatePresence>
    );
}
