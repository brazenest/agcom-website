"use client";

import { FadeIn } from "@/components/ui/MotionWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { ContactButton } from "@/components/ui/ContactButton";

export default function HomeContactSection() {
  return (
    <Section id="contact" className="flex justify-center">
      <FadeIn>
        <Card className="text-center p-12 max-w-2xl w-full">

          <Heading level={2} className="mb-4">Let’s talk</Heading>

          <p className="text-text-secondary dark:text-dark-text-secondary font-engineering mb-8">
            Interested in working together or have a question? Send me a note and I’ll respond soon.
          </p>

          <ContactButton variant="primary">
            Contact Me
          </ContactButton>

        </Card>
      </FadeIn>
    </Section>
  );
}
