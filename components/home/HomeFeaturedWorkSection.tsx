"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";

const projects = [
  {
    title: "Ancestry DNA Kit Activation",
    description: "React-based consumer activation flow handling millions of daily users.",
    category: "engineering",
    href: "https://ancestry.com",
  },
  {
    title: "Timeshare Sales & Rentals Platform",
    description: "Full PHP + MySQL real-time listing engine for vacation ownership.",
    category: "engineering",
    href: "https://www.sellmytimesharenow.com/",
  },
  {
    title: "SHADOWCATpictures",
    description: "Cinematic YouTube channel of choreographed water performances.",
    category: "cinematic",
    href: "https://youtube.com/c/SHADOWCATpictures",
  },
  {
    title: "Portfolio Website",
    description: "Next.js + TailwindCSS platform uniting engineering and cinematic craft.",
    category: "hybrid",
    href: "#",
  },
];

export default function HomeFeaturedWorkSection() {
  return (
    <main id="work">
      <Section>
        <FadeIn>
          <Heading level={2} className="text-center mb-16">Featured Work</Heading>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.15}>
              <Card className="hover:shadow-md transition-all duration-300">
                <Link href={p.href} className="block group">
                  <h3 className="font-cinematic text-2xl mb-3 text-text group-hover:text-brand-500 dark:text-dark-text dark:group-hover:text-dark-brand-500">
                    {p.title}
                  </h3>
                  <p className="font-engineering text-text-secondary dark:text-dark-text-secondary mb-4">
                    {p.description}
                  </p>

                  <span className="inline-block text-xs uppercase tracking-wide px-3 py-1 rounded-md bg-surface-muted dark:bg-dark-surface-muted text-text-secondary dark:text-dark-text-secondary">
                    {p.category}
                  </span>
                </Link>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </main>
  );
}
