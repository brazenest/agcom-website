"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 h-[3px] z-[9999] bg-gradient-to-r from-[var(--color-accent-blue)] via-[var(--color-accent-amber)] to-[var(--color-accent-blue)] origin-left blur-[1px]"
            style={{ scaleX: scrollYProgress }}
            transition={{ duration: 0.1 }}
        />
    );
}
