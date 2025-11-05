"use client";

import FeaturedWorkCard from "@/components/FeaturedWorkCard";
const projects: Project[] = [
  {
    title: 'DNA Activation Platform',
    description: 'A high-performance React platform powering consumer DNA kit activations at scale.',
    category: 'engineering',
    tone: 'light',
    href: '/work/dna-platform',
  },
  {
    title: 'Cinematic Showreel',
    description: 'A curated reel blending technology, motion, and storytelling through light and rhythm.',
    category: 'cinematic',
    tone: 'light',
    href: '/work/showreel',
  },
]

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-[var(--color-bg-section)] text-[var(--color-text)]">
      <div className="container mx-auto px-6">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map(project => <FeaturedWorkCard project={project} />)}
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string,
  description: string,
  category: 'engineering' | 'cinematic' | 'hybrid',
  tone: string,
  href: string,
}
