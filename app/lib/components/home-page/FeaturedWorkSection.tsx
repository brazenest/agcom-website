"use client";

import Link from "next/link";
import { ProjectCardHero } from "../ProjectCardHero";
import { ProjectCardSmall } from "../ProjectCardSmall";

// Import optimized static image assets
import engineeringBg from "@/public/featured/engineering-left.png";
import cinematicBg from "@/public/featured/cinematic-right.png";
import photographyBg from "@/public/featured/photography-neutral.png";

export default function FeaturedWorkSection() {
  return (
    <section className="relative w-full bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2
              className="font-bold leading-tight"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 1vw + 1.2rem, 2.25rem)",
                lineHeight: 1.2,
              }}
            >
              Featured Work
            </h2>
            <p className="text-[var(--color-subtext)] text-base leading-relaxed max-w-xl">
              A blend of software engineering, cinematic direction, and photography —
              all unified by precision, lighting, and storytelling.
            </p>
          </div>

          <Link
            href="/work"
            className="
              inline-block
              bg-[var(--color-accent-blue)] hover:bg-[var(--color-accent-amber)]
              text-white font-semibold text-sm md:text-base
              px-5 py-2 rounded-md
              shadow-[0_15px_30px_rgba(30,58,138,0.4)]
              transition-all duration-200
              hover:-translate-y-0.5
            "
          >
            View All Projects
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ProjectCardHero
            href="/work/personal-website"
            imgSrc={engineeringBg}
            label="Full-Stack Engineering"
            title="Personal Brand Website"
            blurb="Designed and developed my own responsive portfolio website, integrating cinematic visuals with a refined engineering-grade codebase."
            tech={["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"]}
          />

          <ProjectCardSmall
            href="/work/project-video"
            imgSrc={cinematicBg}
            label="Cinematic Direction"
            title="Lady Gaga's Famous Water Show"
            blurb="Directed, shot, and polished a branded video of her debut show at the world-famous Fountains of Bellagio."
            tech={["Director", "DP", "Color Grade", "Debut", "YouTube"]}
          />

          <ProjectCardSmall
            href="/work/project-photo"
            imgSrc={photographyBg}
            label="Photography"
            title="Landscapes of Natural Wonders"
            blurb="Explored the breathtaking environment of the Great Basin and Capital Reef National Parks."
            tech={["Landscape", "Natural", "Landmarks", "Environment"]}
          />
        </div>
      </div>
    </section>
  );
}