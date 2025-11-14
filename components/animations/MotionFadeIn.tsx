'use client';
import { motion } from 'framer-motion';

interface MotionFadeInProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    once?: boolean;
}

export default function MotionFadeIn({
    children,
    delay = 0,
    y = 20,
    once = true,
}: MotionFadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.8, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
}
