"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FeaturedWorkCardProps {
  project: {
    title: string;
    description: string;
    category?: "engineering" | "cinematic" | "hybrid";
    href?: string;
  };
}

export default function FeaturedWorkCard({ project }: FeaturedWorkCardProps) {
  const { ref, MotionDiv, animation } = useScrollReveal();

  const categoryOverlay =
    project.category === "engineering"
      ? "bg-[var(--overlay-blue)]"
      : project.category === "cinematic"
      ? "bg-[var(--overlay-amber)]"
      : "bg-[rgba(255,255,255,0.02)]";

  return (
    <Link href={project.href ?? "#"} className="block">
      <MotionDiv
        ref={ref}
        {...animation}
        className={`card relative overflow-hidden ${categoryOverlay}`}
      >
        <div className="relative z-10">
          <h3 className="font-cinema text-xl mb-2">{project.title}</h3>
          <p className="font-engineering text-[var(--color-text-secondary)] text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </MotionDiv>
    </Link>
  );
}
