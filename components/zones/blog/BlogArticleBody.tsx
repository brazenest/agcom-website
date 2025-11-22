import { MarkdownRenderer } from "@/components/common/MarkdownRenderer"
import { ArticleBodyT } from "@/types/blog"

/* Article body */
export const BlogArticleBody = ({ body }: BlogArticleBodyProps) => (
	<section className = "layout-section" >
		<div className="layout-inner">
			<div className="layout-prose">
				<MarkdownRenderer content={body} />
			</div>
		</div>
	</section >
)

type BlogArticleBodyProps = {
  body: ArticleBodyT,
}
