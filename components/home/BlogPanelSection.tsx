import { BlogPostModel } from "@/types/blog"
import { SplitContentPanelSection } from "../newton/layout/SplitContentPanelSection"

export const BlogPanelSection = ({
	posts,
}: BlogPanelSectionProps) => {
	return (
		<SplitContentPanelSection
			id="blog-panel-section"
			title="My Latest Blog Posts"
			subtitle="Stay updated with my most recent articles and insights."
			variant="half"
			leftContent={
				<span className="blog-post-list-item">
					<h3 className="blog-post-title font-heading font-bold text-2xl mb-4.25">{posts[0].title}</h3>
					<p className="text-lg line-clamp-3 text-gray-700 dark:text-gray-300">
						{posts[0].excerpt}
					</p>
				</span>
			}
			rightContent={
				<ul className="blog-post-list space-y-6.75">
					{posts.slice(1, 4).map((post) => (
						<li key={post.id} className="blog-post-list-item">
							<h4 className="blog-post-title font-heading font-semibold text-lg mb-2.5">{post.title}</h4>
							<p className="line-clamp-2 text-gray-700 dark:text-gray-300">
								{post.excerpt}
							</p>
						</li>
					))}
				</ul>
			}
		/>
	)
}

type BlogPanelSectionProps = {
	posts: BlogPostModel[]
}
