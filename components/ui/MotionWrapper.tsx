"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.8, 0.25, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);
