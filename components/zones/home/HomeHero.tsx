"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "../../ui/MotionWrapper";

export default function HomeHero() {
  return (
    <Section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center  overflow-hidden min-h-[90vh]"
    >
        <Heading level={1}>
          Engineering + Cinematic Storytelling
        </Heading>

        <p className="mt-6 text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto font-engineering">
          Software Engineer & Web Designer. Video Producer & Photographer. I bridge product-grade engineering with cinematic craft.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <Button variant="primary" asChild>
            <Link href="#work">View My Work</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
    </Section>
  );
}
