"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default function HomeHero() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <Section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center pt-40 pb-32 overflow-hidden"
    >
      {/* Parallax background blob */}
      <motion.div
        style={{ scale: bgScale }}
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_20%_20%,rgba(58,156,255,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,156,74,0.25),transparent_60%)]
          blur-3xl
        "
      />

      {/* Foreground text with parallax drift */}
      <motion.div style={{ y: titleY }}>
        <Heading level={1} className="font-cinematic">
          Engineering + Cinematic Storytelling
        </Heading>
      </motion.div>

      <motion.p
        style={{ y: subtitleY }}
        className="mt-6 text-lg text-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto font-engineering"
      >
        Software Engineer & Web Designer. Video Producer & Photographer. I bridge product-grade engineering with cinematic craft.
      </motion.p>

      <motion.div
        style={{ y: subtitleY }}
        className="mt-10 flex gap-4 justify-center"
      >
        <Button variant="primary" asChild>
          <Link href="#work">View My Work</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </Section>
  );
}
