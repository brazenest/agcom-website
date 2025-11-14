"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomeIntroSection() {
  return (
    <main id="intro">
      <Section className="flex flex-col md:flex-row items-center gap-16">

        <FadeIn className="w-full md:w-1/2 flex justify-center">
          <Card className="p-0 overflow-hidden w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/assets/images/profile/alden.jpg"
              alt="Alden Gillespy portrait"
              fill
              className="object-cover"
            />
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="w-full md:w-1/2 text-center md:text-left">
          <Heading level={2} className="mb-6 font-cinematic">
            I build things that look good and work beautifully.
          </Heading>

          <p className="font-engineering text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m Alden Gillespy — a full-stack engineer and creative storyteller. I bridge software development and visual art through thoughtful systems, cinematic visuals, and intentional UX.
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Button asChild>
              <Link href="#work">View My Work</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </FadeIn>

      </Section>
    </main>
  );
}
