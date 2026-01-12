import { getBlogPostsFromDB } from "@/functions/getBlogPostsFromDB"
import { CardLink } from "./layout/CardLink"
import { SplitContentPanelSection } from "./layout/SplitContentPanelSection"
import { BlogPostModel } from "@/types/blog"

export const BlogLatestPosts = async () => {

	const posts: BlogPostModel[] = await getBlogPostsFromDB({})
  
	return (
		<SplitContentPanelSection
			id="latest-blog-posts"
			title="My Latest Blog Posts"
			subtitle="Stay updated with my most recent articles and insights."
			variant="half"
			leftContent={
				<span className="blog-post-list-item">
					<CardLink
						title={posts[0].title}
						href={`/blog/posts/${posts[0].slug}`}
					>
						{posts[0].dek}
					</CardLink>
				</span>
			}
			rightContent={
				<ul className="blog-post-list space-y-6.75">
					{posts.slice(1, 4).map((post) => (
						<li key={post.slug} className="blog-post-list-item">
							<CardLink
								title={post.title}
								href={`/blog/posts/${post.slug}`}
								size="sm"
							>
								{post.dek}
							</CardLink>
						</li>
					))}
				</ul>
			}
		/>
	)
}
