// components/zones/blog/BlogArticlesSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import type { ArticleT } from "@/types/blog";
import { formatDate } from "@/functions/formatDate";

interface BlogArticlesSectionProps {
	articles: ArticleT[];
}

export function BlogArticlesSection({ articles }: BlogArticlesSectionProps) {
	if (!articles || articles.length === 0) return null;

	return (
		<Section
			align="left"
			width="full"
			eyebrow="Notes & Process"
			title="Writing on engineering, design, and cinematic craft."
			subtitle="In-progress thoughts on shipping resilient systems, designing motion, and bridging code with camera."
		>
			{/* Header stays constrained for readability */}
			<div className="max-w-3xl">
				{/* Section header is rendered by <Section>, this block is just optional extra copy if you want it */}
			</div>

			{/* Grid gets to breathe horizontally on desktop */}
			<div className="mt-6 md:mt-8">
				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{articles.map((article) => {

						const articleDateFormatted = formatDate(article.date)

						return (
							<Link
								key={article.slug}
								href={`/blog/articles/${article.slug}`}
								className="group h-full"
							>
								<Card className="h-full bg-card-bg border-border/70 shadow-sm group-hover:border-accent/70 group-hover:shadow-lg transition-all">
									<CardContent className="p-5 md:p-6 flex flex-col gap-3">
										<div className="flex items-center justify-between gap-2 text-[0.7rem] text-text-muted">
											<span>{article.category ?? "Article"}</span>
											{/* {article.readingTime && (
											<span>{article.readingTime} min read</span>
										)} */}
										</div>

										<h3 className="font-heading text-base md:text-lg text-text group-hover:text-accent transition-colors">
											{article.title}
										</h3>

										{article.excerpt && (
											<p className="text-sm text-text-muted line-clamp-3">
												{article.excerpt}
											</p>
										)}

										<div className="mt-auto flex items-center justify-between pt-2 text-[0.7rem] text-text-muted">
											{article.date && (
												<span>
													{articleDateFormatted ?? article.date}
												</span>
											)}
											<span className="inline-flex items-center gap-1 text-xs text-accent group-hover:gap-1.5 transition-all">
												Read article
												<span aria-hidden>→</span>
											</span>
										</div>
									</CardContent>
								</Card>
							</Link>
						)
					})}
				</div>
			</div>
		</Section>
	);
}

export default BlogArticlesSection;
