import { Card } from "@/components/newton/ui/Card"
import { Page } from "@/components/newton/ui/Page"
import { PageTitle } from "@/components/newton/ui/PageTitle"
import { Panel } from "@/components/newton/ui/Panel"
import { Section } from "@/components/newton/layout/Section"
import { Subsection } from '@/components/newton/layout/Subsection'
import { SplitContentPanelSection } from "@/components/newton/layout/SplitContentPanelSection"
import { BlogPostModel } from "@/types/blog"
import { getBlogPostsFromDB } from "@/functions/getBlogPostsFromDB"

export default async function PlaygroundPage() {

	const articles: BlogPostModel[] = await getBlogPostsFromDB({})

	return (
		<Page id="playground">
			<Section id="playground-section-one">
				<PageTitle
					title="Fusce interdum nisl ac porta aliquet."
					subtitle="Quisque facilisis eros et placerat sollicitudin. Aliquam in lectus ante. Nullam eget velit non turpis rhoncus interdum. Pellentesque id nisl et odio facilisis pulvinar." />
				<Panel
					title="Suspendisse at dolor urna."
					className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card
						title="Sed eleifend consequat nunc non malesuada"
						actions={[
							{
								text: 'Learn More',
								link: '#',
							}
						]}
					>
						Aenean vestibulum tincidunt nisl, sed posuere magna varius ac. Curabitur tincidunt mauris in est dapibus, in finibus lacus porta.
					</Card>
					<Card
						title="Quisque et finibus magna"
						actions={[
							{
								text: 'Learn More',
								link: '#',
							}
						]}
					>
						Donec auctor, enim eget interdum ultricies, lacus risus dignissim lorem, ac condimentum tellus ipsum non leo.
					</Card>
				</Panel>
			</Section>
			<Section id="playground-section-two">
				<PageTitle title="Fusce interdum nisl ac porta aliquet." subtitle="Quisque facilisis eros et placerat sollicitudin. Aliquam in lectus ante. Nullam eget velit non turpis rhoncus interdum. Pellentesque id nisl et odio facilisis pulvinar." />
				<span className="space-y-6.25">
					<Subsection id="playground-section-two-subsection-one"
						title="Curabitur pulvinar tempor sem"
						image={{
							src: "/assets/images/roles/software-engineer/ChatGPT Image Dec 30, 2025, 12_33_47 PM.jpeg",
							alt: "Playground Image",
							width: 800,
							height: 533,
						}}
					>
						<span className="prose text-gray-700 dark:text-gray-300">
							<p>
								Etiam id accumsan velit, in venenatis sem. Curabitur pulvinar tempor sem, eget luctus dolor tempor vel. Cras urna turpis, dignissim at elit non, porttitor venenatis felis. In eu mauris venenatis, mollis leo in, bibendum elit. Nunc sodales bibendum metus, in ultrices enim fermentum non. Sed ut metus a ipsum laoreet bibendum in at est. Etiam accumsan ornare velit vel efficitur. Phasellus ipsum ex, commodo sit amet erat ac, mollis tempus quam.
							</p>
						</span>
					</Subsection>
					<Subsection id="playground-section-two-subsection-two"
						title="Maecenas tincidunt rhoncus enim sed tincidunt"
						image={{
							src: "/assets/images/roles/video-producer/ChatGPT Image Dec 30, 2025, 12_35_23 PM.jpeg",
							alt: "Playground Image",
							width: 800,
							height: 533,
						}}
						imageAlign="right"
					>
						<span className="prose text-gray-700 dark:text-gray-300">
							<p>
								Morbi sit amet justo aliquam, elementum felis id, semper enim. Quisque hendrerit ex et lorem bibendum, quis ultricies purus auctor. Cras eleifend, lacus at fermentum feugiat, nisi ipsum egestas sem, et egestas ligula augue ut dolor. Sed iaculis malesuada elit, sit amet malesuada ligula rhoncus non. Praesent feugiat feugiat justo, sed venenatis augue placerat vitae. Maecenas non erat bibendum, fermentum arcu ac, fermentum libero.
							</p>
						</span>
					</Subsection>
					<Subsection id="playground-section-two-subsection-three"
						title="Vivamus condimentum odio sed luctus facilisis"
						image={{
							src: "/assets/images/roles/photographer/ChatGPT Image Dec 30, 2025, 03_21_35 PM.jpeg",
							alt: "Playground Image",
							width: 800,
							height: 533,
						}}
					>
						<span className="prose text-gray-700 dark:text-gray-300">
							<p>
								Ut elit velit, accumsan et eleifend quis, hendrerit sed nibh. Nam nisi elit, scelerisque vel tellus vel, suscipit maximus eros. Vivamus mi libero, vehicula aliquam vulputate et, scelerisque nec nulla. Proin tristique sed ex non consequat. Praesent sollicitudin euismod magna, et blandit augue blandit sit amet.
							</p>
						</span>
					</Subsection>
				</span>
			</Section>
			<SplitContentPanelSection
				id="playground-split-content-section"
				title="My Latest Blog Posts"
				subtitle="Stay updated with my most recent articles and insights."
				variant="half"
				leftContent={
					<span className="blog-post-list-item">
						<h3 className="blog-post-title font-heading font-bold text-3xl mb-4.25">{articles[0].title}</h3>
						<p className="text-lg line-clamp-3 text-gray-700 dark:text-gray-300">
							{articles[0].excerpt}
						</p>
					</span>
				}
				rightContent={
					<ul className="blog-post-list space-y-6.75">
						{articles.slice(1, 4).map((article) => (
							<li key={article.id} className="blog-post-list-item">
								<h4 className="blog-post-title font-heading font-semibold text-lg mb-2.5">{article.title}</h4>
								<p className="line-clamp-2 text-gray-700 dark:text-gray-300">
									{article.excerpt}
								</p>
							</li>
						))}
					</ul>
				}
			/>
		</Page >
	)
}