import { Card } from "@/components/newton/ui/Card";
import { Page } from "@/components/newton/ui/Page";
import { PageTitle } from "@/components/newton/ui/PageTitle";
import { Panel } from "@/components/newton/ui/Panel";
import { Section } from "@/components/newton/ui/Section";

export default function PlaygroundPage() {
	return (
		<Page id="playground">
			<Section id="playground-section-one">
				<PageTitle title="Fusce interdum nisl ac porta aliquet." subtitle="Quisque facilisis eros et placerat sollicitudin. Aliquam in lectus ante. Nullam eget velit non turpis rhoncus interdum. Pellentesque id nisl et odio facilisis pulvinar." />
				<Panel title="Suspendisse at dolor urna." className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
		</Page>
	)
}