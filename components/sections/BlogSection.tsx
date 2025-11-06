"use client";
export const dynamic = 'force-dynamic';

import { formatDate } from "@/functions/formatDate";
import { getArticles } from "@/functions/get-articles";
import { ArticleT } from "@/types/blog";
import { motion } from "framer-motion";
import Link from "next/link";

const articles: ArticleT[] = (
  await getArticles({ params: [{ key: 'limit', value: 3 }] })
).map(article => ({
  ...article,
  date: formatDate(article.date, 'MMMM YYYY'),
}))

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Ambient Lighting */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(58,167,255,0.05),transparent_60%)] blur-[60px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,156,74,0.05),transparent_60%)] blur-[60px]"
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
          Latest Articles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <Link
                href={article.href}
                className="group block bg-[var(--color-surface)] border border-[var(--color-divider)] rounded-xl p-6 hover:bg-[var(--color-surface-alt)] hover:shadow-[var(--shadow-strong)] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
              >
                <div className="flex items-center justify-between text-xs font-[var(--font-engineering)] text-[var(--color-text-secondary)] mb-4">
                  <span className="capitalize">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-[var(--font-cinema)] text-xl mb-3 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-amber)] transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)] leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-[var(--color-text-inverse)] font-[var(--font-engineering)] font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:shadow-[var(--shadow-soft)] !text-black"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
