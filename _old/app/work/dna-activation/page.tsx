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

export default function DNAActivationCaseStudy() {
	return (
		<Page>

			{/* Entry Context */}
			<Section
				mode="engineering"
				width="bleed"
				height="medium"
			>
				{/* abstract activation / DNA motif */}
			</Section>

			{/* Problem Framing */}
			<SignalPanel
				thesis="The DNA activation flow failed under emotional and cognitive load."
				caption="Users were completing a sensitive, high-stakes task through an interface that amplified uncertainty instead of reducing it."
			>
				{/* original flow diagram placeholder */}
			</SignalPanel>

			{/* Narrative Context */}
			<NarrativeBlock title="Why this was hard" mode="engineering">
				<p>
					DNA activation is not a neutral task. Users are often anxious,
					distracted, or uncertain about what they’re doing and why it matters.
					That emotional context magnifies every point of friction.
				</p>

				<p>
					The original flow treated activation as a linear checklist,
					without accounting for hesitation, mistakes, or the need for reassurance
					when something went wrong.
				</p>
			</NarrativeBlock>

			{/* Authority Proof */}
			<MetricStrip
				metrics={[
					{ value: 'Millions', label: 'Users annually' },
					{ value: 'Multi-step', label: 'Activation flow' },
					{ value: 'High', label: 'Emotional context' },
					{ value: 'Zero-error', label: 'Tolerance' },
				]}
			/>

			{/* System Thinking */}
			<ThinkingArtifact
				caption="The redesign treated activation as a state machine with explicit transitions, predictable validation, and safe recovery paths."
			>
				{/* state diagram / system flow */}
			</ThinkingArtifact>

			{/* Interpretive Narrative */}
			<NarrativeBlock title="How the system was rethought" mode="engineering">
				<p>
					Instead of asking users to “get everything right,”
					the system was redesigned to make the current state obvious
					and the next action unambiguous.
				</p>

				<p>
					Errors became contained and recoverable,
					progress became visible without pressure,
					and guidance was introduced only when it reduced uncertainty.
				</p>
			</NarrativeBlock>

			{/* Judgment Proof */}
			<ArtifactPair
				before={
					<>
						{/* cluttered, fragmented UI */}
					</>
				}
				after={
					<>
						{/* grouped, calm activation UI */}
					</>
				}
				caption="Most of the improvement came from removing ambiguity and stabilizing orientation, not adding new features."
			/>

			{/* Synthesis Core */}
			<DualModeBlock
				leftMeta="Engineering"
				rightMeta="Experience"
				leftTitle="State clarity"
				rightTitle="Emotional pacing"
				leftCaption="Predictable transitions, explicit validation, and consistent recovery paths."
				rightCaption="A calmer rhythm that reduces stress and builds confidence step by step."
				left={
					<>
						{/* validation logic / state flow */}
					</>
				}
				right={
					<>
						{/* annotated UI frames / pacing notes */}
					</>
				}
			/>

			{/* Process Reality */}
			<ProcessReveal
				stages={[
					<> {/* naive linear flow */} </>,
					<> {/* over-corrected iteration */} </>,
					<> {/* reduced, final solution */} </>,
				]}
			/>

			{/* Reflection Narrative */}
			<NarrativeBlock title="What changed as a result" mode="synthesis">
				<p>
					The final system feels quieter, but it does more work.
					Users are less rushed, less confused, and more confident
					that they’re on the right path.
				</p>

				<p>
					That combination — technical rigor paired with emotional awareness —
					is what ultimately made the activation flow more resilient at scale.
				</p>
			</NarrativeBlock>

			{/* Close + CTA */}
			<ContactCTA
				copy="If you’re working on systems where clarity under pressure matters, let’s talk."
			/>

		</Page>
	)
}
