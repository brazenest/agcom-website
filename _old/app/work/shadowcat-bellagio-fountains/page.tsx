import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Page } from "@/components/ui/Page"
import { WorkHero } from "@/components/zones/work/WorkHero"
import { WorkAbstract } from "@/components/zones/work/WorkAbstract"
import { WorkMeta } from "@/components/zones/work/WorkMeta"
import { WorkProblemApproachOutcome } from "@/components/zones/work/WorkProblemApproachOutcome"
import { WorkAnatomy } from "@/components/zones/work/WorkAnatomy"
import { WorkBody } from "@/components/zones/work/WorkBody"
import { WorkGallery } from "@/components/zones/work/WorkGallery"
import { WorkDeepDive } from "@/components/zones/work/WorkDeepDive"
import { WorkInteractions } from "@/components/zones/work/WorkInteractions"
import { WorkPerformance } from "@/components/zones/work/WorkPerformance"
import { WorkChallenges } from "@/components/zones/work/WorkChallenges"
import { WorkBeforeAfter } from "@/components/zones/work/WorkBeforeAfter"
import { WorkCTA } from "@/components/zones/work/WorkCTA"

import workData from '@/data/work.json' assert { type: 'json' }

const { hero, abstract, meta, pao, anatomy, bodyOne, gallery, deepDive, bodyTwo, interactions, performance, challenges, beforeAndAfter, bodyThree } = workData.caseStudies["shadowcat-bellagio-fountains"].sections

export default function WorkShadowcatBellagioFountainsPage() {

	return (
		<Page id="work-page-shadowcat-bellagio-fountains">

			{/* HERO */}
			<WorkHero
				eyebrow={hero.eyebrow}
				title={hero.title}
				subtitle={hero.subtitle}
				image={hero.image}
			/>

			{/* ABSTRACT */}
			<WorkAbstract content={renderMarkdown(abstract.content)} />

			{/* META / AT A GLANCE */}
			<WorkMeta
				subtitle={meta.subtitle}
				columns={meta.columns}
			/>

			{/* PROBLEM → APPROACH → OUTCOME */}
			<WorkProblemApproachOutcome
				problem={pao.problem}
				approach={pao.approach}
				outcome={pao.outcome}
			/>

			{/* ANATOMY */}
			<WorkAnatomy
				variant="side"
				title={anatomy.title}
				subtitle={anatomy.subtitle}
				imageSrc={anatomy.image.src}
				imageAlt={anatomy.image.alt}
				imageCallouts={anatomy.image.callouts}
			/>

			{/* BODY — narrative #1 */}
			<WorkBody
				eyebrow="Exposition"
				title={bodyOne.title}
				subtitle={bodyOne.subtitle}
				content={renderMarkdown(bodyOne.content)}
			/>

			{/* GALLERY */}
			<WorkGallery
				title={gallery.title}
				subtitle={gallery.subtitle}
				images={gallery.images}
				caption={gallery.caption}
			/>

			{/* DEEP DIVE */}
			<WorkDeepDive
				title={deepDive.title}
				subtitle={deepDive.subtitle}
				content={renderMarkdown(deepDive.content)}
			/>

			{/* BODY — narrative #2 */}
			<WorkBody
				weight={1}
				eyebrow="Crafting the narrative"
				title={bodyTwo.title}
				subtitle={bodyTwo.subtitle}
				content={renderMarkdown(bodyTwo.content)}
			/>

			{/* INTERACTIONS / MOTION */}
			<WorkInteractions
				title={interactions.title}
				subtitle={interactions.subtitle}
				items={interactions.items}
			/>

			{/* PERFORMANCE - Metrics & Examples */}
			<WorkPerformance
				title={performance.title}
				subtitle={performance.subtitle}
				metrics={performance.metrics}
				body={renderMarkdown(performance.body)}
			/>

			{/* CHALLENGES */}
			<WorkChallenges
				title={challenges.title}
				subtitle={challenges.subtitle}
				items={challenges.items}
			/>

			{/* BEFORE / AFTER */}
			<WorkBeforeAfter
				title={beforeAndAfter.title}
				subtitle={beforeAndAfter.subtitle}
				before={beforeAndAfter.before}
				after={beforeAndAfter.after}
			/>

			{/* BODY — narrative #3 */}
			<WorkBody weight={3} content={renderMarkdown(bodyThree.content)} />

			{/* CTA */}
			<WorkCTA variant="shadowcat" align='center' />

		</Page>
	);
}

const renderMarkdown = (markdownText: string) => {
	return (
		<Markdown remarkPlugins={[remarkGfm]}>
			{markdownText}
		</Markdown>
	);
}
