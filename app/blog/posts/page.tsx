import { HeroSection } from "@/components/newton/HeroSection"
import { CardLink } from "@/components/newton/layout/CardLink"
import { Page } from "@/components/newton/layout/Page"
import { Panel } from "@/components/newton/layout/Panel"
import { getBlogPostsFromDB } from "@/functions/getBlogPostsFromDB"

export default async function BlogPostsIndexPage() {

	const posts = await getBlogPostsFromDB({})

	return (
		<Page id="blog-index-page" >

			<HeroSection
				title="My Blog Posts"
				subtitle="Insights on software engineering, design systems, and the intersection of code and creativity."
			/>

			<div className="max-w-7xl mx-auto">
				<Panel id="blog-posts-list-panel">
					<ol id="blog-posts-list" className="md:columns-2 space-y-6">
						{posts.map((post, i) => (
							<li key={i} className="blog-posts-list-item break-inside-avoid">
								<article key={post.id} id={`article-card--id-${post.id}`} className="blog-post-list-article">
									<CardLink
										title={post.title}
										href={`/blog/posts/${post.slug}`}
									>
										{post.dek}
									</CardLink>
								</article>
							</li>
						))}
					</ol>
				</Panel>
			</div>


		</Page>
	)
}