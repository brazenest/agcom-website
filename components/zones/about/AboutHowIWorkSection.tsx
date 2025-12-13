import { Section } from "@/components/ui/Section"
import { AboutHowIWorkWorkCard } from "./how-i-work/AboutHowIWorkWorkCard"
import { AboutHowIWorkWorkT } from "@/types/about"
import { SectionPropsBase } from "@/types/section"

const works: AboutHowIWorkWorkT[] = [
	{
		title: 'Engineering',
		description: 'React, Next.js, TypeScript, Node, and pragmatic system design — from prototypes to production systems.',
		features: [
			'Design systems & component libraries',
			'API integration and data flows',
			'Performance, accessibility, reliability',
		],
	},
	{
		title: 'Cinematic',
		description: 'Narrative-focused shoots, pacing, and color work that support products, brands, and people.',
		features: [
			'Direction, shot planning, and blocking',
			'Camera, lighting, and on-set decisions',
			'Edit, pacing, and color grading',
		],
	},
	{
		title: 'Glue work',
		description: 'The connective tissue between disciplines: naming, docs, motion specs, and making the system feel coherent.',
		features: [
			'Design tokens & motion language',
			'Documentation & walkthroughs',
			'Cross-functional collaboration',
		],
	},
]

export const AboutHowIWorkSection = ({
	weight = 0,
}: AboutHowIWorkSectionProps) => (
	<Section
		weight={weight}
		eyebrow="How I work"
		title="Two core lenses, one standard of craft."
		subtitle="Different toolchains, same expectation for reliability, clarity, and intention."
	>
		<div className="grid gap-10 md:grid-cols-3 text-sm md:text-base text-text-muted border-t border-border/40 pt-8">
			{works.map(work => <AboutHowIWorkWorkCard key={work.title} work={work} />)}
		</div>
	</Section>
)

type AboutHowIWorkSectionProps = SectionPropsBase & {

}
