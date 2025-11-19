import AboutTimeline from "@/components/zones/about/AboutTimeline";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactButton } from "@/components/ui/ContactButton";
import { Group } from "@/components/ui/Group";
import { AboutCoreRoleT, AboutSkillT, AboutTimelineItemT } from "@/types/about";
import { AboutHero } from "@/components/zones/about/AboutHero";
import { Page } from "@/components/ui/Page";
import { AboutSkills } from "@/components/zones/about/AboutSkills";
import { AboutIntro } from "@/components/zones/about/AboutIntro";

export const metadata: Metadata = {
  title: "About Alden Gillespy – Software Engineer, Web Designer & Video Producer",
}

export default function AboutPage() {

  /* Hero content */

  const heroText = <>
    <p>I’m a <strong>Software Engineer</strong> & <strong>Web Designer</strong> and a <strong>Video Producer</strong> & <strong>Photographer</strong>. I bridge product-grade engineering with cinematic craft — building interfaces that feel intentional and visuals that move people.</p>

    <p>I live at the intersection of <strong>engineering precision and cinematic storytelling</strong>. My work spans from <strong>scalable web applications</strong> to <strong>narrative visual content</strong>, and everything I build is driven by intentional design, emotional clarity, and technical reliability.</p>
  </>

  const coreRoles: AboutCoreRoleT[] = [
    {
      title: 'Software Engineer',
      skills: [
        'React',
        'TypeScript',
        'Node',
        'Design Systems',
      ],
    },
    {
      title: 'Video Producer / Photographer',
      skills: [
        'Cinematography',
        'Color',
        'Editing',
        'Storyboarding',
      ],
    },
  ]

  /* Intro content */

  // Placeholder for prose

  /* Skills content */

  const skills: AboutSkillT[] = [
    {
      title: 'Software Engineering & Web Design',
      tagline: 'Building polished, accessible applications with deliberate motion and engineering rigor.',
      category: 'engineering',
      labels: [
        'React',
        'TypeScript',
        'Node',
        'Design Systems',
      ],
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6l-3 3 3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 6l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Video Production & Photography',
      tagline: 'Crafting cinematic imagery and concise visual narratives for brands and products.',
      category: 'cinematic',
      labels: [
        'Cinematography',
        'Color',
        'Editing',
        'Storyboarding',
      ],
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 7v10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.5l4 3-4 3V3.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Design Systems & Motion',
      tagline: 'Creating cohesive systems and animation languages that scale across products.',
      category: 'hybrid',
      labels: [
        'Tokens',
        'Patterns',
        'Micro-Interactions',
      ],
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
  ]

  /* Timeline content */

  const timeline: AboutTimelineItemT[] = [
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

  /******** BEGIN component render **********/

  return (
    <Page id="about">

      {/* Hero */}
      <AboutHero
        title="Alden Gillespy"
        text={heroText}
        coreRoles={coreRoles}
      />

      <AboutIntro />

      <AboutSkills skills={skills} />

      <AboutTimeline timeline={timeline} />

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

          <Group>
            <ContactButton variant="primary">
              Contact Me
            </ContactButton>
            <ButtonLink
              href="/#work"
            >
              See Work
            </ButtonLink>
          </Group>


        </div>
      </section>

    </Page>
  );
}
