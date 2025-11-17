"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleT } from "@/types/article";

export default function BlogPostClient({ article }: { article: ArticleT }) {
    return (
        <article className="relative py-24 md:py-32 px-6 md:px-10 max-w-4xl mx-auto">
            {/* Ambient light layers */}
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
                <header className="mb-12 text-center">
                    <p className="text-xs font-[var(--font-engineering)] text-[var(--color-text-secondary)] uppercase mb-2">
                        {article.date}
                    </p>
                    <h1 className="font-[var(--font-cinema)] text-4xl md:text-5xl text-[var(--color-text-primary)] mb-4 leading-tight">
                        {article.title}
                    </h1>
                    <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        {article.excerpt}
                    </p>
                </header>

                {/* Article body */}
                <div className="prose prose-invert prose-lg font-[var(--font-engineering)] max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.body}
                    </ReactMarkdown>
                </div>

                {/* Back link */}
                <footer className="mt-16 text-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-divider)] text-[var(--color-text-primary)] font-[var(--font-engineering)] font-medium hover:bg-[var(--color-surface-alt)] transition-colors duration-300"
                    >
                        ← Back to Articles
                    </a>
                </footer>
            </div>            
        </article>
    );
}
