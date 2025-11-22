// components/zones/blog/BlogArticlesSection.tsx
import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import type { ArticleT } from "@/types/blog";
import { formatDate } from "@/functions/formatDate";

interface BlogArticlesSectionProps {
	articles: ArticleT[];
}

export function BlogArticlesSection({ articles }: BlogArticlesSectionProps) {
	if (!articles || articles.length === 0) return null;

	// Take the first as featured, show a few more as compact rows
	const [featured, ...rest] = articles;
	const secondary = rest.slice(0, 4);

	return (
		<Section
			align="left"
			width="default"
			eyebrow="Notes & process"
			title="Writing on engineering, design, and cinematic craft."
			subtitle="In-progress thoughts on shipping resilient systems, designing motion, and bridging code with camera."
		>
			<div className="mt-6 md:mt-8 space-y-8">
				{/* Featured article */}
				<Link
					href={`/blog/articles/${featured.slug}`}
					className="group block"
				>
					<Card className="bg-card-bg border-border/70 shadow-sm group-hover:border-accent/70 group-hover:shadow-md transition-all">
						<CardContent className="p-5 md:p-6 space-y-3">
							<div className="flex items-center justify-between gap-2 text-[0.7rem] text-text-muted">
								<div className="flex items-center gap-2">
									<span>{featured.category ?? "Article"}</span>
									{featured.date && (
										<span>{formatDate(featured.date)}</span>
									)}
								</div>
								{featured.readingTime && (
									<span>{featured.readingTime} min read</span>
								)}
							</div>

							<h3 className="font-heading text-lg md:text-xl text-text group-hover:text-accent transition-colors">
								{featured.title}
							</h3>

							{featured.excerpt && (
								<p className="text-sm text-text-muted line-clamp-3">
									{featured.excerpt}
								</p>
							)}

							<span className="inline-flex items-center gap-1 text-xs text-accent">
								Read article
								<span aria-hidden>→</span>
							</span>
						</CardContent>
					</Card>
				</Link>

				{/* Secondary articles as a lighter list */}
				{secondary.length > 0 && (
					<div className="border-t border-border/60 divide-y divide-border/40">
						{secondary.map(article => {
							const displayDate = formatDate(article.date);

							return (
								<Link
									key={article.slug}
									href={`/blog/articles/${article.slug}`}
									className="group flex items-start justify-between gap-4 py-4"
								>
									<div className="space-y-1">
										<h4 className="font-heading text-sm md:text-base text-text group-hover:text-accent transition-colors">
											{article.title}
										</h4>
										{article.excerpt && (
											<p className="text-xs md:text-sm text-text-muted line-clamp-2">
												{article.excerpt}
											</p>
										)}
										<div className="mt-1 flex items-center gap-2 text-[0.7rem] text-text-muted">
											{displayDate && <span>{displayDate}</span>}
											{article.category && (
												<Pill variant="subtle" size="sm">
													{article.category}
												</Pill>
											)}
											{article.readingTime && (
												<span>· {article.readingTime} min read</span>
											)}
										</div>
									</div>

									<span className="mt-1 inline-flex items-center text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
										→
									</span>
								</Link>
							);
						})}
					</div>
				)}
			</div>
		</Section>
	);
}

export default BlogArticlesSection;
