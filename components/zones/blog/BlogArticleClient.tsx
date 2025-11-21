"use client";

import { motion } from "framer-motion";
import { ArticleT } from "@/types/blog";
import Image from "next/image";
import { formatDate } from "@/functions/formatDate";
import { MarkdownRenderer } from "@/components/common/MarkdownRenderer";

export default function BlogArticleClient({ article }: { article: ArticleT }) {

	article.dateFormatted = formatDate(article.date)

	return (
		<main className="section pt-28">
			<article className="container-page max-w-3xl mx-auto zone-engineering">

				{/* Title */}
				<header className="mb-10">
					<h1 className="text-4xl font-heading mb-4">
						{article.title}
					</h1>

					{/* Meta */}
					<div className="flex items-center gap-3 text-sm text-text-muted">
						<span>{article.category?.toUpperCase()}</span>
						<span className="text-border">•</span>
						<time dateTime={article.date}>{article.dateFormatted}</time>
					</div>
				</header>

				{/* Hero Image (optional) */}
				{article.image && (
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="mb-12"
					>
						<Image
							src={article.image}
							alt={article.title}
							className="rounded-xl shadow-md"
						/>
					</motion.div>
				)}

				{/* Body */}
				<div className="prose prose-invert-dark prose-brand max-w-none
                        text-text leading-relaxed
                        prose-h2:text-2xl prose-h3:text-xl
                        prose-p:my-6 prose-li:my-2 prose-img:rounded-lg
                        prose-a:text-accent hover:prose-a:text-accent-hover">

					<MarkdownRenderer content={article.body} />

				</div>

			</article>
		</main>
	);
}
