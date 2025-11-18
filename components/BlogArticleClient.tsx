"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleT } from "@/types/article";

export default function BlogPostClient({ article }: { article: ArticleT }) {
    return (
        <article className="relative py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">

            <div className="relative z-10">
                <header className="mb-12 text-center">
                    <p className="text-xs text-text-secondary uppercase mb-6">
                        {article.date}
                    </p>
                    <h1 className="font-cinematic mt-11 mb-8 text-primary dark:text-dark-primary">
                        {article.title}
                    </h1>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        {article.excerpt}
                    </p>
                </header>

                {/* Article body */}
                <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.body}
                    </ReactMarkdown>
                </div>

                {/* Back link */}
                <footer className="mt-16 text-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-divider)] text-primary font-medium hover:bg-[var(--color-surface-alt)] transition-colors duration-300"
                    >
                        ← Back to Articles
                    </a>
                </footer>
            </div>            
        </article>
    );
}
