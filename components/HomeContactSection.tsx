"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function HomeContactSection() {
  return (
    <main id="contact">
      <Section className="flex justify-center">
        <FadeIn>
          <Card className="text-center p-12 max-w-2xl w-full">
            <Heading level={2} className="mb-4">Let’s talk</Heading>

            <p className="text-text-secondary dark:text-dark-text-secondary font-engineering mb-8">
              Interested in working together or have a question? Send me a note and I’ll respond soon.
            </p>

            <Button asChild>
              <Link href="mailto:ag@aldengillespy.com">Contact Me</Link>
            </Button>
          </Card>
        </FadeIn>
      </Section>
    </main>
  );
}
