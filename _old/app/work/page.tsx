import { Page } from '@/components/apollo/Page'
import { Section } from '@/components/apollo/Section'

import { SignalPanel } from '@/components/apollo/primitives/SignalPanel'
import { SignalCard } from '@/components/apollo/primitives/SignalCard'
import { ContactCTA } from '@/components/apollo/primitives/ContactCTA'

export default function WorkIndexPage() {
	return (
		<Page>

			{/* Opening Frame */}
			<SignalPanel
				thesis="Selected work focused on clarity, reliability, and restraint."
				caption="Each project addresses a different failure mode: emotional load, commercial complexity, or visual noise."
			>
				{/* abstract system / grid / neutral visual */}
			</SignalPanel>

			{/* Project Index */}
			<Section
				width="wide"
				height="medium"
				spacing="expand"
			>
				<div className="grid md:grid-cols-3 gap-8">

					<SignalCard
						href="/work/dna-activation"
						title="DNA Activation Flow"
						signal="Reliability under emotional load"
						summary="Redesigning a sensitive, multi-step activation flow to remain calm, predictable, and resilient at scale."
						mode="engineering"
					/>

					<SignalCard
						href="/work/timeshare-platform"
						title="Timeshare Sales & Rentals Platform"
						signal="Clarity under commercial complexity"
						summary="Normalizing marketplace data and interface hierarchy to improve comparison, trust, and decision speed."
						mode="engineering"
					/>

					<SignalCard
						href="/work/shadowcat-bellagio"
						title="Shadowcat Pictures — Bellagio Fountains"
						signal="Taste under visual abundance"
						summary="A cinematic study in restraint, rhythm, and motion amid one of the most visually noisy environments in the world."
						mode="cinematic"
					/>

				</div>
			</Section>

			{/* Quiet Close */}
			<Section
				width="narrow"
				height="short"
				align="centered"
			>
				<p className="text-center">
					Each project is a different constraint. The system remains the same.
				</p>
			</Section>

			{/* CTA */}
			<ContactCTA
				copy="If one of these problems resembles yours, I can help."
			/>

		</Page>
	)
}
