import { BlogLatestPosts } from "@/components/newton/BlogLatestPosts"
import { ContactCTASection } from "@/components/newton/contact/ContactCTASection"
import { BlogBody } from "@/components/newton/layout/BlogBody"
import { Page } from "@/components/newton/layout/Page"
import { Panel } from "@/components/newton/layout/Panel"
import { TagBar } from "@/components/newton/layout/TagBar"
import { formatBlogPostDate } from "@/functions/formatBlogPostDate"
import { getBlogPostsFromDB } from "@/functions/getBlogPostsFromDB"
import { notFound } from "next/navigation"

export default async function BlogPostsSinglePage({
	params,
}: {
  params: Promise<{ slug: string }>
}) {

	const { slug } = await params
	const [ post ] = await getBlogPostsFromDB({ slug })

	if (!post) notFound()
  
	return (
		<Page id="blog-posts-single-page">
			<article id={`blog-post--${post.id}`} className="px-5 md:px-9.25 lg:px-8">

				{/* Post header */}
				<header className="blog-post-header pb-3 pt-8.75 w-full border-b border-blue-300">
					<div className="max-w-5xl mx-auto">
						<hgroup>
							<h1 className="blog-post--title mb-7.75 mt-3.5 text-4xl md:max-w-4xl text-center mx-auto leading-10.25 lg:leading-13.75 font-heading font-medium lg:font-semibold">
								{post.title}
							</h1>
							<p className="blog-post--dek text-lg leading-7.25 md:max-w-2xl mx-auto text-center my-1.75 text-gray-700 dark:text-gray-300">
								{post.dek}
							</p>
						</hgroup>
					</div>
				</header>

				{/* Post body */}
				<BlogBody className="my-10 px-0.25">
					{post.body}
				</BlogBody>

				{/* Post footer */}
				<footer id={`blog-post-footer--id-${post.id}`} className="md:max-w-3xl max-w-5xl mx-auto" role="contentinfo">
					<Panel id="blog-post--meta" title="About this post">
						<div className="flex flex-col md:flex-row gap-6">
							<dl className="grid md:grid-cols-2 w-full">
								<span className="blog-post--meta--col-1 md:block space-y-4">
									<div className="blog-post--meta--col-item">
										<dt className="font-heading font-semibold my-1">Posted on</dt>
										<dd><time dateTime={post.dateposted.toISOString()}>{formatBlogPostDate(post.dateposted)}</time></dd>
									</div>
									<div className="blog-post--meta--col-item">
										<dt className="font-heading font-semibold my-0.75">Author</dt>
										<dd>Alden Gillespy</dd>
									</div>
									
								</span>
								<span className="blog-post--meta--col-2 md:block">
									{/* <dt>Last updated</dt>
									<dd><time dateTime={post.datemodified.toISOString()}>{formatBlogPostDate(post.datemodified)}</time></dd> */}
									<div className="blog-post--meta--col-item">
										<dt className="font-heading font-semibold my-0.75">Tags</dt>
										<dd>{post.tags.length ? (
											<TagBar tags={post.tags} />
										) : <span><em>none</em></span> }</dd>
									</div>
									
								</span>
							</dl>
						</div>
					</Panel>
					
				</footer>

			</article>

			<BlogLatestPosts />

			<ContactCTASection
				id="blog-post--contact-cta"
				heading="Ready to begin a journey together?"
				text="Reach out to me today to let me know how I can assist you with your projects. I am ready to help accomplish your goals regardless which phase of development your team is in."
				actions={[
					{ text: "View resume", href: "/assets/files/Resume_2026-01.pdf", variant: "secondary" },
				]}
			/>

		</Page>
	)
}