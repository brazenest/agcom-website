import { Page } from '@/components/apollo/Page'
import { Section } from '@/components/apollo/Section'

import { SignalPanel } from '@/components/apollo/primitives/SignalPanel'
import { MetricStrip } from '@/components/apollo/primitives/MetricStrip'
import { ThinkingArtifact } from '@/components/apollo/primitives/ThinkingArtifact'
import { ArtifactPair } from '@/components/apollo/primitives/ArtifactPair'
import { DualModeBlock } from '@/components/apollo/primitives/DualModeBlock'
import { ProcessReveal } from '@/components/apollo/primitives/ProcessReveal'
import { NarrativeBlock } from '@/components/apollo/primitives/NarrativeBlock'
import { ContactCTA } from '@/components/apollo/primitives/ContactCTA'

export default function TimesharePlatformCaseStudy() {
	return (
		<Page>

			{/* Entry Context */}
			<Section
				mode="engineering"
				width="bleed"
				height="medium"
			>
				{/* abstract listing grid / booking surface */}
			</Section>

			{/* Problem Framing */}
			<SignalPanel
				thesis="The platform made high-value decisions harder than they needed to be."
				caption="Users were comparing properties, dates, and prices through inconsistent layouts and poorly prioritized information."
			>
				{/* original listing card / booking flow abstraction */}
			</SignalPanel>

			{/* Narrative Context */}
			<NarrativeBlock title="Why this was a real problem" mode="engineering">
				<p>
					Timeshare sales and rentals are inherently comparison-driven.
					Users are trying to evaluate multiple options quickly,
					often with incomplete information and little patience for friction.
				</p>

				<p>
					The existing platform exposed all available data,
					but offered very little guidance about what actually mattered,
					leading to cognitive overload and decision paralysis.
				</p>
			</NarrativeBlock>

			{/* Authority Proof */}
			<MetricStrip
				metrics={[
					{ value: 'Thousands', label: 'Active listings' },
					{ value: 'Multiple', label: 'Property types' },
					{ value: 'High', label: 'Price sensitivity' },
					{ value: 'Transactional', label: 'User intent' },
				]}
			/>

			{/* System Thinking */}
			<ThinkingArtifact
				caption="The redesign treated listings as normalized data entities with explicit priority rules and predictable comparison surfaces."
			>
				{/* listing schema / normalization diagram */}
			</ThinkingArtifact>

			{/* Interpretive Narrative */}
			<NarrativeBlock title="How the system was restructured" mode="engineering">
				<p>
					The first step was separating what the system knew
					from what the user needed to see at any given moment.
					Not all data deserved equal visual weight.
				</p>

				<p>
					By enforcing consistent data contracts and rendering rules,
					the interface could surface prices, dates, and amenities
					in a way that supported fast scanning and fair comparison.
				</p>
			</NarrativeBlock>

			{/* Judgment Proof */}
			<ArtifactPair
				before={
					<>
						{/* cluttered card with mixed hierarchy */}
					</>
				}
				after={
					<>
						{/* reduced card with clear price, dates, amenities */}
					</>
				}
				caption="Clarity improved by enforcing hierarchy and consistency, not by adding more information."
			/>

			{/* Synthesis Core */}
			<DualModeBlock
				leftMeta="Engineering"
				rightMeta="Experience"
				leftTitle="Data normalization"
				rightTitle="Decision clarity"
				leftCaption="Predictable schemas, consistent fields, and rule-driven rendering."
				rightCaption="Faster scanning, clearer comparison, and reduced decision fatigue."
				left={
					<>
						{/* schema / data contract visualization */}
					</>
				}
				right={
					<>
						{/* annotated card layouts / booking steps */}
					</>
				}
			/>

			{/* Process Reality */}
			<ProcessReveal
				stages={[
					<> {/* unstructured listing cards */} </>,
					<> {/* over-dense intermediate design */} </>,
					<> {/* reduced, final card system */} </>,
				]}
			/>

			{/* Reflection Narrative */}
			<NarrativeBlock title="What changed as a result" mode="synthesis">
				<p>
					The final platform feels simpler, but it supports more confident decisions.
					Users can quickly understand what’s comparable,
					what’s different, and what tradeoffs they’re making.
				</p>

				<p>
					By aligning data structure with visual hierarchy,
					the system became easier to trust and easier to use,
					without hiding important information.
				</p>
			</NarrativeBlock>

			{/* Close + CTA */}
			<ContactCTA
				copy="If you’re working on a marketplace or decision-heavy product, I’d be happy to talk."
			/>

		</Page>
	)
}
