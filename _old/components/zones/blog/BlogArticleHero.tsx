import { formatDate } from "@/functions/formatDate"
import { ArticleT } from "@/types/blog"

/* Article hero */
export const BlogArticleHero = ({ article }: BlogArticleHeroProps) => {
	const displayDate = formatDate(article.date, 'MMMM YYYY')

	return (
		<section className = "layout-section" >
			<div className="layout-inner max-w-3xl">
				<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
					Notes &amp; Process
				</p>
				<h1 className="mt-3 font-heading text-4xl md:text-5xl leading-16.5 text-text">
					{article.title}
				</h1>
				{article.excerpt && (
					<p className="mt-4 text-base md:text-lg text-text-muted">
						{article.excerpt}
					</p>
				)}

				<div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-text-muted">
					{displayDate && <span>{displayDate}</span>}
					{article.readtime && (
						<>
							<span>·</span>
							<span>{article.readtime} min read</span>
						</>
					)}
					{article.category && (
						<>
							<span>·</span>
							<span>{article.category}</span>
						</>
					)}
				</div>
			</div>
		</section >
	)
}

type BlogArticleHeroProps = {
  article: ArticleT,
}
