import { Page } from '@/components/apollo/Page'
import { Section } from '@/components/apollo/Section'

import { SignalPanel } from '@/components/apollo/primitives/SignalPanel'
import { MetricStrip } from '@/components/apollo/primitives/MetricStrip'
import { DualModeBlock } from '@/components/apollo/primitives/DualModeBlock'
import { ProcessReveal } from '@/components/apollo/primitives/ProcessReveal'
import { DepthSlice } from '@/components/apollo/primitives/DepthSlice'
import { NarrativeBlock } from '@/components/apollo/primitives/NarrativeBlock'
import { ContactCTA } from '@/components/apollo/primitives/ContactCTA'

export default function ShadowcatBellagioCaseStudy() {
	return (
		<Page>

			{/* Entry Context — Establishing Shot */}
			<Section
				mode="cinematic"
				width="bleed"
				height="medium"
			>
				{/* abstract fountain night frame / bokeh placeholder */}
			</Section>

			{/* Intent Framing */}
			<SignalPanel
				thesis="The goal was not to document the fountains, but to reinterpret them cinematically."
				caption="Las Vegas is visually loud. The challenge was deciding what to leave out."
			>
				{/* framing grid / composition abstraction */}
			</SignalPanel>

			{/* Narrative Reflection (Light) */}
			<NarrativeBlock title="Restraint as a creative choice" mode="cinematic">
				<p>
					The Bellagio fountains are endlessly photographed,
					often captured as spectacle rather than experience.
				</p>

				<p>
					This work treats them as a study in rhythm —
					light, water, and silence arranged over time.
				</p>
			</NarrativeBlock>

			{/* Authority (Intentionally Light) */}
			<MetricStrip
				metrics={[
					{ value: '260k+', label: 'Views' },
					{ value: '450+', label: 'Subscribers' },
					{ value: 'Dozens', label: 'Performances captured' },
				]}
			/>

			{/* Pure Taste Interruption */}
			<DepthSlice>
				{/* abstract water motion / bokeh visual */}
			</DepthSlice>

			{/* Synthesis Core */}
			<DualModeBlock
				leftMeta="Control"
				rightMeta="Expression"
				leftTitle="System discipline"
				rightTitle="Cinematic rhythm"
				leftCaption="Repeatable setup, controlled exposure, and framing constraints."
				rightCaption="Letting moments resolve without interruption or excess."
				left={
					<>
						{/* rig / setup abstraction */}
					</>
				}
				right={
					<>
						{/* selected cinematic frames */}
					</>
				}
			/>

			{/* Process Reality (Minimal) */}
			<ProcessReveal
				stages={[
					<> {/* literal capture */} </>,
					<> {/* over-stylized experiment */} </>,
					<> {/* restrained final language */} </>,
				]}
			/>

			{/* Final Reflection */}
			<NarrativeBlock title="What the work aims to do" mode="cinematic">
				<p>
					The finished pieces invite attention rather than demand it.
					They slow the viewer down instead of competing for focus.
				</p>

				<p>
					That same sensibility carries into how I approach interface
					and system design.
				</p>
			</NarrativeBlock>

			{/* Close + CTA */}
			<ContactCTA
				copy="If you’re working on something where taste and restraint matter, let’s talk."
			/>

		</Page>
	)
}
