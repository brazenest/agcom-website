"use client";

import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";

// Example data source
const posts = [
  {
    slug: "designing-a-portfolio-that-feels-like-a-film",
    title: "Designing a Portfolio That Feels Like a Film",
    date: "October 2025",
    category: "cinematic",
    cover: "/assets/images/blog/film-portfolio-cover.jpg",
    excerpt:
      "How I approached the visual language of aldengillespy.com — balancing engineering precision with cinematic emotion.",
    content: `
## The Vision

When designing my portfolio, I wanted it to feel like a film — not a static résumé, but a living, breathing story.

Every section became a scene, every transition a cut or dissolve. The goal wasn't to impress with effects, but to capture **emotion through rhythm**.

## Design Philosophy

I built with Next.js and TailwindCSS for the engineering side — precision, modularity, performance.

On the cinematic side, I brought in Framer Motion to choreograph scroll and reveal animations, mirroring the pacing of a good film edit.

## Lessons Learned

- Code and composition share the same DNA — both need rhythm and restraint.
- Good UI design is just storytelling with pixels.
- The most cinematic interface is one that feels *inevitable*.

That’s what I strive for — seamless transitions between logic and feeling.
    `,
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <article className="relative py-24 md:py-32 px-6 md:px-10 max-w-4xl mx-auto">
        {/* Ambient light */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(58,167,255,0.06),transparent_60%)] blur-[60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,156,74,0.06),transparent_60%)] blur-[60px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-[var(--font-engineering)] text-[var(--color-text-secondary)] uppercase mb-2">
              {post.category} • {post.date}
            </p>
            <h1 className="font-[var(--font-cinema)] text-4xl md:text-5xl text-[var(--color-text-primary)] mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Cover image */}
          {post.cover && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
              className="relative w-full h-64 md:h-96 mb-16 rounded-xl overflow-hidden shadow-[var(--shadow-strong)]"
            >
              <Image
                src={post.cover}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Article body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="prose prose-invert prose-lg font-[var(--font-engineering)] max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Back link */}
          <div className="mt-16 text-center">
            <a
              href="/#blog"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-divider)] text-[var(--color-text-primary)] font-[var(--font-engineering)] font-medium hover:bg-[var(--color-surface-alt)] transition-colors duration-300"
            >
              ← Back to Articles
            </a>
          </div>
        </div>
      </article>
    </>

  );
}

// --- Markdown renderer ---
function renderMarkdown(content: string) {
  const html = content
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gim, "<em>$1</em>")
    .replace(/`(.*?)`/gim, "<code>$1</code>")
    .replace(/\n$/gim, "<br />");
  return html.trim();
}
