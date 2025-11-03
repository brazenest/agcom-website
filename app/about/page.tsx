import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import AboutCard from "@/components/about/AboutCard";
import AboutTimeline from "@/components/about/AboutTimeline";

export default function AboutPage() {
  const skills: {
    title: string;
    text: string;
    category: "engineering" | "cinematic" | "hybrid";
    icon?: React.ReactNode;
  }[] = [
    {
      title: "Software Engineering & Web Design",
      text: "Building polished web applications with React, TypeScript, Tailwind and pragmatic system design. I focus on accessibility, performance, and delightful motion.",
      category: "engineering",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6l-3 3 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 6l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Video Production & Photography",
      text: "Cinematic storytelling through camera, color, and edit. I plan shoots, operate camera, direct, and edit concise visual narratives for web and film.",
      category: "cinematic",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 7v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.5l4 3-4 3V3.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Design Systems & Motion",
      text: "Designing cohesive systems and motion language that scale across products — from tokens to micro-interactions.",
      category: "hybrid",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
          <path d="M12 2v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 19v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M2 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 12h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const timeline: {
    year: string;
    title: string;
    description: string;
    category?: "engineering" | "cinematic" | "hybrid";
  }[] = [
    {
      year: "2025",
      title: "Lead Frontend Engineer — Freelance & Collaborations",
      description: "Designed and shipped motion-driven UI patterns for product launches and guided engineering teams on modern React architectures.",
      category: "engineering",
    },
    {
      year: "2024",
      title: "Cinematic Short — Director / Editor",
      description: "Wrote, directed, and edited a short film screened at regional festivals. Focused on visual storytelling and color grading.",
      category: "cinematic",
    },
    {
      year: "2022",
      title: "Product Design & Systems Work",
      description: "Built a portable design system and motion vocabulary used across marketing and product teams.",
      category: "hybrid",
    },
  ];

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(58,167,255,0.03),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,156,74,0.03),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h1 className="font-[var(--font-cinema)] text-4xl md:text-5xl mb-4 text-[var(--color-text-primary)]">
              Alden Gillespy
            </h1>
            <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)] mb-6 leading-relaxed max-w-xl">
              I’m a Software Engineer & Web Designer and a Video Producer & Photographer. I bridge product-grade engineering with cinematic craft — building interfaces that feel intentional and visuals that move people.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-white font-[var(--font-engineering)] font-medium transition-transform duration-200 hover:-translate-y-[1px] !text-black"
                aria-label="View my work"
              >
                View Work
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-[var(--color-divider)] text-[var(--color-text-primary)] font-[var(--font-engineering)]"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="space-y-6 flex flex-col items-center text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden ring-1 ring-[var(--color-divider)]">
              <Image
                src="/assets/images/profile/alden.jpg"
                alt="Alden Gillespy — headshot"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-2 text-sm text-[var(--color-text-primary)] font-[var(--font-engineering)]">
              Hi, I'm Alden! Glad to meet you.
            </div>

            <div className="text-sm text-[var(--color-text-secondary)]">Core Roles</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl border border-[var(--color-divider)] bg-[var(--color-surface)]">
                <div className="font-[var(--font-engineering)] text-[var(--color-text-primary)] font-semibold">Software Engineer</div>
                <div className="text-sm text-[var(--color-text-secondary)]">React, TypeScript, Node, Design Systems</div>
              </div>
              <div className="p-4 rounded-xl border border-[var(--color-divider)] bg-[var(--color-surface)]">
                <div className="font-[var(--font-engineering)] text-[var(--color-text-primary)] font-semibold">Video Producer / Photographer</div>
                <div className="text-sm text-[var(--color-text-secondary)]">Cinematography, Color, Editing, Storyboarding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-[var(--font-cinema)] text-2xl mb-6 text-[var(--color-text-primary)]">What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <AboutCard key={s.title} skill={s} index={i} />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <AboutTimeline timeline={timeline} />

      {/* Media / Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-[var(--font-cinema)] text-2xl mb-6 text-[var(--color-text-primary)]">Selected Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/work/software-engineer" className="block p-6 rounded-xl border border-[var(--color-divider)] bg-[var(--color-surface)]">
            <div className="font-[var(--font-engineering)] font-semibold text-[var(--color-text-primary)] mb-2">Product Interfaces</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Systems work, motion, and polished UIs for launch-ready products.</div>
          </Link>

          <Link href="/work/video-producer" className="block p-6 rounded-xl border border-[var(--color-divider)] bg-[var(--color-surface)]">
            <div className="font-[var(--font-engineering)] font-semibold text-[var(--color-text-primary)] mb-2">Films & Videos</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Short films, commercials, and narrative-driven pieces I've directed and edited.</div>
          </Link>

          <Link href="/work/photographer" className="block p-6 rounded-xl border border-[var(--color-divider)] bg-[var(--color-surface)]">
            <div className="font-[var(--font-engineering)] font-semibold text-[var(--color-text-primary)] mb-2">Photography</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Portraits, location work, and stills for web and editorial use.</div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 bg-[var(--color-surface)] border border-[var(--color-divider)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-[var(--font-cinema)] text-xl text-[var(--color-text-primary)]">Want to collaborate?</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">I’m available for contract work, creative collaborations, and speaking opportunities.</p>
          </div>

            <div className="flex gap-3">
            <Link href="/contact" aria-label="Contact Alden" className="inline-flex items-center px-5 py-3 rounded-lg bg-[var(--color-accent-blue)] text-white font-[var(--font-engineering)] cta-contrast">Contact</Link>
            <Link href="/work" className="inline-flex items-center px-5 py-3 rounded-lg border border-[var(--color-divider)] font-[var(--font-engineering)]">See Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
