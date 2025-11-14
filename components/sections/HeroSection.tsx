'use client';

import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import MotionFadeIn from '@/components/animations/MotionFadeIn';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="
        relative flex flex-col items-center justify-center text-center
        min-h-[80vh] px-6 md:px-10 overflow-hidden
        bg-surface text-text
        dark:bg-dark-surface dark:text-dark-text
        transition-colors duration-500
      "
        >
            {/* --- Ambient gradient layers (theme aware) --- */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle at 30% 30%, rgba(58,156,255,0.08), transparent 60%)',
                    filter: 'blur(80px)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            />
            <motion.div
                className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-0 transition-opacity duration-700"
                style={{
                    background:
                        'radial-gradient(circle at 70% 60%, rgba(255,156,74,0.1), transparent 60%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* --- Content --- */}
            <div className="relative z-10 max-w-3xl mx-auto">
                <MotionFadeIn y={40}>
                    <Heading level={1} className="font-cinematic mb-6 !text-brand-500">
                        Engineering + Cinematic Storytelling
                    </Heading>
                </MotionFadeIn>

                <MotionFadeIn delay={0.2}>
                    <p className="text-lg md:text-xl text-text-secondary dark:text-dark-text-secondary font-engineering leading-relaxed mb-10">
                        Bridging the precision of code with the artistry of film —
                        creating digital experiences that move people.
                    </p>
                </MotionFadeIn>

                <MotionFadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="primary" href="#work">
                            View My Work
                        </Button>
                        <Button variant="outline" href="#contact">
                            Get in Touch
                        </Button>
                    </div>
                </MotionFadeIn>
            </div>
        </section>
    );
}
