"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  category?: "engineering" | "cinematic" | "hybrid";
  href?: string;
}

const projects: Project[] = [
  {
    title: "Ancestry DNA Kit Activation",
    description:
      "A React-based consumer activation flow handling millions of daily users, focused on reliability and intuitive UX.",
    category: "engineering",
    href: "https://ancestry.com/",
  },
  {
    title: "Timeshare Sales & Rentals Platform",
    description:
      "Full PHP + MySQL stack powering real-time listings, pricing, and customer dashboards for vacation ownership.",
    category: "engineering",
    href: "https://www.sellmytimesharenow.com/",
  },
  {
    title: "SHADOWCATpictures",
    description:
      "Cinematic YouTube channel featuring choreographed water fountain performances filmed at global landmarks.",
    category: "cinematic",
    href: "https://youtube.com/c/SHADOWCATpictures",
  },
  {
    title: "Portfolio Website (aldengillespy.com)",
    description:
      "Next.js + TailwindCSS platform uniting engineering precision and cinematic design into a personal showcase.",
    category: "hybrid",
    href: "#",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* --- Ambient Lighting --- */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(58,167,255,0.06),transparent_60%)] blur-[60px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,156,74,0.06),transparent_60%)] blur-[60px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          className="font-[var(--font-cinema)] text-3xl md:text-4xl text-[var(--color-text-primary)] text-center mb-16"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <Link
                href={"#"}
                target={project.href?.startsWith("http") ? "_blank" : "_self"}
                className="group block bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-xl p-8 hover:bg-[var(--color-surface-alt)] hover:shadow-[var(--shadow-strong)] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
              >
                <h3 className="font-[var(--font-cinema)] text-2xl mb-3 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div
                  className={`inline-block px-3 py-1 text-xs font-[var(--font-engineering)] uppercase tracking-wide rounded-md ${
                    project.category === "engineering"
                      ? "bg-[rgba(58,167,255,0.12)] text-[var(--color-accent-blue)]"
                      : project.category === "cinematic"
                      ? "bg-[rgba(255,156,74,0.12)] text-[var(--color-accent-amber)]"
                      : "bg-[rgba(255,255,255,0.06)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {project.category}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
