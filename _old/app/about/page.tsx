import { Page } from '@/components/apollo/Page'
import { Section } from '@/components/apollo/Section'

import { SignalPanel } from '@/components/apollo/primitives/SignalPanel'
import { MetricStrip } from '@/components/apollo/primitives/MetricStrip'
import { DualModeBlock } from '@/components/apollo/primitives/DualModeBlock'
import { NarrativeBlock } from '@/components/apollo/primitives/NarrativeBlock'
import { ContactCTA } from '@/components/apollo/primitives/ContactCTA'

export default function AboutPage() {
	return (
		<Page>

			{/* Opening Assertion */}
			<SignalPanel
				thesis="I design and build systems that are technically sound and visually intentional."
				caption="My background spans software engineering and cinematic storytelling, which shapes how I think about clarity, structure, and experience."
			>
				{/* abstract system / flow placeholder */}
			</SignalPanel>

			{/* Conversational Context */}
			<NarrativeBlock
				title="What that actually means"
				mode="engineering"
			>
				<p>
					Most of my work lives at the intersection of complexity and clarity.
					I’ve spent years building production systems where reliability matters,
					while also developing a visual sensibility rooted in film, motion, and pacing.
				</p>

				<p>
					That combination influences how I approach everything — from API design
					and UI flows to how information is framed and revealed to users.
				</p>
			</NarrativeBlock>

			{/* Authority Proof */}
			<MetricStrip
				metrics={[
					{ value: '10+ yrs', label: 'Production engineering' },
					{ value: 'Millions', label: 'Users impacted' },
					{ value: 'Web', label: 'Primary platform' },
					{ value: 'Systems', label: 'Design focus' },
				]}
			/>

			{/* How I Think */}
			<NarrativeBlock
				title="How I approach problems"
				mode="engineering"
			>
				<p>
					I tend to think in systems rather than features.
					Instead of optimizing individual screens or endpoints in isolation,
					I look for failure modes, unclear boundaries, and points of cognitive overload.
				</p>

				<p>
					My goal is almost always reduction: fewer decisions, fewer surprises,
					and interfaces that behave predictably under real-world conditions.
				</p>
			</NarrativeBlock>

			{/* Synthesis Core */}
			<DualModeBlock
				leftMeta="Engineering"
				rightMeta="Cinematic"
				leftTitle="System clarity"
				rightTitle="Visual intention"
				leftCaption="Clear state, predictable behavior, and resilient flows are non-negotiable."
				rightCaption="Pacing, framing, and restraint determine how those systems are perceived."
				left={
					<>
						{/* system diagram placeholder */}
					</>
				}
				right={
					<>
						{/* cinematic frame placeholder */}
					</>
				}
			/>

			{/* Why It Matters */}
			<NarrativeBlock
				title="Why this combination matters"
				mode="synthesis"
			>
				<p>
					Many products fail not because they lack features, but because they overwhelm,
					confuse, or erode trust over time.
				</p>

				<p>
					Bringing engineering discipline together with visual and narrative awareness
					allows me to design systems that feel calmer, clearer, and more intentional —
					especially when users are under pressure.
				</p>
			</NarrativeBlock>

			{/* Close + CTA */}
			<ContactCTA
				copy="If this way of thinking aligns with what you’re working on, let’s talk."
			/>

		</Page>
	)
}
