'use client';
export const dynamic = 'force-dynamic';

import { formatDate } from '@/functions/formatDate';
import { getArticles } from '@/functions/get-articles';
import { ArticleT } from '@/types/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Load latest 3 articles ---
const articles: ArticleT[] = (
  await getArticles({ params: [{ key: 'limit', value: 3 }] })
).map((article) => ({
  ...article,
  date: formatDate(article.date, 'MMMM YYYY'),
}));

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto bg-bg text-text"
    >
      {/* Ambient accent light layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, var(--color-accent-muted), transparent 60%)',
          filter: 'blur(60px)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 70%, var(--color-accent), transparent 60%)',
          filter: 'blur(60px)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
          className="font-cinematic text-3xl md:text-4xl text-text text-center mb-16"
        >
          Latest Articles
        </motion.h2>

        {/* Article cards */}
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
                className="group block bg-surface border border-border rounded-xl p-6 hover:bg-accent-muted/30 hover:shadow-md transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
              >
                <div className="flex items-center justify-between text-xs font-engineering text-text-secondary mb-4">
                  <span className="capitalize">{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-cinematic text-xl mb-3 text-text group-hover:text-accent transition-colors duration-500">
                  {article.title}
                </h3>

                <p className="font-engineering text-text-secondary leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-hover text-white font-engineering font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] shadow-md"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
