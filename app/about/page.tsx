import Link from "next/link";
import Image from "next/image";
import AboutCard from "@/components/AboutCard";
import AboutTimeline from "@/components/AboutTimeline";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "About Alden Gillespy – Software Engineer, Web Designer & Video Producer",
}

type AboutSkillT = {
  title: string;
  text: string;
  category: ContentCategoryEnumT;
  icon?: React.ReactNode;
}

type ContentCategoryEnumT = "engineering" | "cinematic" | "hybrid"

export default function AboutPage() {
  const skills: AboutSkillT[] = [
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
        year: "2023-2025",
        title: "Consumer DNA Kit Activation Product — Full-Stack Engineer",
        description: "Developed both front-end and back-end for Ancestry in React, Redux, Node.js, and Kotlin, creating a seamless onboarding experience for millions of users worldwide.",
        category: "engineering",
      },
      {
        year: "2020-2021",
        title: "Product Design & Systems Work - Full-Stack Developer, Timeshare Platform",
        description: "Built a high-traffic timeshare sales and rentals platform at Concepta using PHP, MySQL, and Apache Solr, optimizing search performance and enabling thousands of daily user interactions.",
        category: "hybrid",
      },
      {
        year: "2019—Present",
        title: "Cinematic Short Films — Video Editor & Cinematic Producer",
        description: "Began to produce and edit years' worth of cinematic videos of choreographed water fountains for my YouTube channel SHADOWCATpictures, earning 260,000+ views for their artistry, timing, and visual storytelling.",
        category: "cinematic",
      },

    ];

  return (
    <>
      {/* Hero */}
      <section id="hero" className="max-w-6xl mx-auto px-6 pt-28 pb-12 relative">

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-5xl mb-4 text-primary dark:text-dark-primary">
              Alden Gillespy
            </h1>
            <p className="text-secondary dark:text-dark-secondary mb-6 leading-relaxed max-w-xl">
              I’m a Software Engineer & Web Designer and a Video Producer & Photographer. I bridge product-grade engineering with cinematic craft — building interfaces that feel intentional and visuals that move people.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href="/#work"
              >
                View Work
              </ButtonLink>

              <ButtonLink
                href="mailto:ag@aldengillespy.com"
                variant="primary"
              >
                Get in Touch
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 flex flex-col items-center text-center">
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

            <div className="mt-2 text-sm text-primary dark:text-dark-primary">
              Hi, I&apos;m Alden! Glad to meet you.
            </div>

            <div className="text-sm text-secondary dark:text-dark-secondary">Core Roles</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
                <div className="text-primary dark:text-dark-primary font-semibold">Software Engineer</div>
                <div className="text-sm text-secondary dark:text-dark-secondary">React, TypeScript, Node, Design Systems</div>
              </div>
              <div className="p-4 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
                <div className="text-primary dark:text-dark-primary font-semibold">Video Producer / Photographer</div>
                <div className="text-sm text-secondary dark:text-dark-secondary">Cinematography, Color, Editing, Storyboarding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="max-w-5xl mx-auto my-12 px-6">
        <div className="prose">
          <h2 className="text-primary dark:text-dark-primary">About Me</h2>

          <p>I’m <strong>Alden Gillespy</strong> — a <strong>Full-Stack Software Engineer</strong>, <strong>Web Designer</strong>, and <strong>Video Producer</strong> who lives at the intersection of <strong>engineering precision and cinematic storytelling</strong>. My work spans from <strong>scalable web applications</strong> to <strong>narrative visual content</strong>, and everything I build is driven by intentional design, emotional clarity, and technical reliability.</p>

          <p>My background is deliberately hybrid. I studied <strong>Computer Science at the University of Florida</strong> and earned a <strong>Film & Video Production degree from Full Sail University</strong>. Those two identities collided early and never separated. I’ve worked as a <strong>full-stack engineer on consumer-scale onboarding flows used by millions</strong>, and I’ve also spent years shooting, editing, and producing videos designed to communicate ideas visually, memorably, and at a professional level.</p>

          <p>Whether I’m engineering a product or producing a video, my philosophy stays the same: <strong>clarity over complexity, craft over shortcuts, and emotion over decoration</strong>. Code should feel as intentional as narrative editing. <strong></strong>Interfaces should have rhythm. Great experiences — whether interactive or cinematic — are invisible when they work and unforgettable when well-designed.</p>

          <p>Today, I focus on bridging those worlds for companies and creatives who value <strong>high-quality work that doesn’t feel templated or generic</strong>. I architect and design full-stack web experiences using technologies like <strong>TypeScript, React, Next.js, Node, Tailwind, and AWS</strong> — and I create visual content using the language of film: <strong>camera, color, composition, and pacing</strong>.</p>

          <p>In every project, I bring both sides of my brain: the engineer who builds systems that scale, and the filmmaker who knows how to make people care.</p>

          <p>Outside of work, you’ll probably find me experimenting with new camera setups, writing about product and design, or solving problems no one asked me to solve — because that’s what engineers do.</p>
        </div>
      </section>

      {/* Skills Cards */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl mb-6 text-primary dark:text-dark-primary">What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <AboutCard key={s.title} skill={s} index={i} />
          ))}
        </div>
      </section>

      <section id="timeline" className="max-w-6xl mx-auto px-6 py-12">
        <h2>Progress Timeline</h2>
        {/* Timeline */}
        <AboutTimeline timeline={timeline} />
      </section>

      {/* Media / Highlights */}
      <section id="highlights" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl mb-6 text-primary dark:text-dark-primary">Selected Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/#work/software-engineer" className="block p-6 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
            <div className="font-semibold text-primary dark:text-dark-primary mb-2">Product Interfaces</div>
            <div className="text-sm text-secondary dark:text-dark-secondary">Systems work, motion, and polished UIs for launch-ready products.</div>
          </Link>

          <Link href="/#work/video-producer" className="block p-6 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
            <div className="font-semibold text-primary dark:text-dark-primary mb-2">Films & Videos</div>
            <div className="text-sm text-secondary dark:text-dark-secondary">Short films, commercials, and narrative-driven pieces I&apos;ve directed and edited.</div>
          </Link>

          <Link href="/#work/photographer" className="block p-6 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
            <div className="font-semibold text-primary dark:text-dark-primary mb-2">Photography</div>
            <div className="text-sm text-secondary dark:text-dark-secondary">Portraits, location work, and stills for web and editorial use.</div>
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 bg-[var(--color-surface)] border border-border dark:border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="text-xl text-primary dark:text-dark-primary !mt-0">
              Want to collaborate?
            </h3>
            <p className="text-sm text-secondary dark:text-dark-secondary">
              I’m available for contract work, creative collaborations, and speaking opportunities.
            </p>
          </div>

          <div className="flex gap-3">
            <ButtonLink
              href="mailto:ag@aldengillespy.com"
              variant="primary"
            >
              Contact Me
            </ButtonLink>
            <ButtonLink
              href="/#work"
            >
              See Work
            </ButtonLink>
          </div>

        </div>
      </section>

    </>
  );
}
