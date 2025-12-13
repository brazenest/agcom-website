// app/work/ancestry-dna-activation/page.tsx

import { WorkHero } from "@/components/zones/work/WorkHero";
import { WorkAbstract } from "@/components/zones/work/WorkAbstract";
import { WorkProblemApproachOutcome } from "@/components/zones/work/WorkProblemApproachOutcome";
import { WorkCTA } from "@/components/zones/work/WorkCTA";
import { WorkChallenges } from "@/components/zones/work/WorkChallenges";
import { WorkMeta } from "@/components/zones/work/WorkMeta";
import { WorkAnatomy } from "@/components/zones/work/WorkAnatomy";
import { WorkDeepDive } from "@/components/zones/work/WorkDeepDive";
import { WorkInteractions } from "@/components/zones/work/WorkInteractions";
import { WorkBeforeAfter } from "@/components/zones/work/WorkBeforeAfter";
import { Page } from "@/components/ui/Page";
import { WorkBody } from "@/components/zones/work/WorkBody";

export default function DNAKitActivationPage() {
	return (
		<Page id="work-ancestry-dna-activation">

			<WorkHero
				eyebrow="Consumer DNA • Ancestry"
				title="Ancestry DNA Kit Activation"
				subtitle="A React-based activation experience designed for reliability, clarity, and a cinematic sense of progress across millions of daily users."
				image={{
					src: "/assets/images/work/ancestry-dna-activation/hero.png",
					alt: "DNA kit activation flow screenshot",
				}}
			/>

			<WorkAbstract>
				<p>
					Activating a DNA kit is a uniquely sensitive moment: users are preparing to submit
					biological data and expect the process to feel trustworthy, clear, and frictionless.
					The original flow had grown organically and carried inconsistencies in layout,
					validation, and messaging.
				</p>

				<p>
					I redesigned the activation sequence across React, Node, and Redux infrastructure,
					focusing on clarity, predictable patterns, and systemization. The result was a more
					cohesive, emotionally considerate experience that held up under massive volume.
				</p>
			</WorkAbstract>

			<WorkBody spacing="comfortable">
				<p>
					DNA kit activation is a sensitive, high-stakes process. Users must trust
					the interface completely while understanding every step. Before exploring
					the system’s anatomy, the context of the experience needs to be clear.
				</p>
			</WorkBody>

			<WorkMeta
				subtitle="A reliable, emotionally clear activation flow designed for trust and scale."
				columns={[
					{
						label: "Platform",
						value: "Consumer DNA kit activation"
					},
					{
						label: "Tech stack",
						value: ["React", "Redux", "TypeScript", "Node", "Kotlin"],
						usePills: true
					},
					{
						label: "Focus areas",
						value: "Flow design, reliability patterns, clarity for sensitive steps"
					},
					{
						label: "Role",
						value: ["Frontend architecture", "UI patterns", "Motion design"]
					}
				]}
			/>

			<WorkBody spacing="default">
				<p>
					From identity verification to consent handling, each part of activation
					carries both technical and emotional weight. The Problem–Approach–Outcome
					framework helps clarify how the experience was shaped.
				</p>
			</WorkBody>

			<WorkProblemApproachOutcome
				spacing="comfortable"
				problem={{ content: "The legacy activation flow relied on mixed UI patterns, unclear validations, and inconsistent messaging. Users felt uncertain during key inputs, creating friction in a high-trust moment." }}
				approach={{ content: "Systemize every step into reusable patterns: inputs, validation groups, progressive disclosure, error surfaces, and motion cues. Each screen needed to feel predictable, calm, and consistent." }}
				outcome={{ content: "A stable, emotionally coherent flow that helped millions of users activate their kits confidently. Both support volume and error rates dropped as the interface became clearer and more consistent." }}
			/>

			<WorkAnatomy
				spacing="comfortable"
				title="Activation Flow Anatomy"
				subtitle="Systemized UI patterns made the flow predictable, scannable, and easier to complete under emotional load."
				imageSrc="/assets/images/work/ancestry-dna-activation/anatomy.png"
				imageAlt="Annotated diagram of the DNA activation flow"
				variant="side"
				imageCallouts={[
					{
						number: 1,
						label: "Progress indicator",
						body: "A calm, low-motion progress bar helped anchor users without adding stress.",
						x: 20,
						y: 8
					},
					{
						number: 2,
						label: "Structured input groups",
						body: "Inputs were grouped logically with consistent label hierarchy and validation surfaces.",
						x: 25,
						y: 20
					},
					{
						number: 3,
						label: "Guidance sections",
						body: "Light, unobtrusive helper text improved clarity on sensitive steps.",
						x: 27,
						y: 34
					},
					{
						number: 4,
						label: "Primary action lane",
						body: "A stable bottom-anchored CTA kept users oriented across every step.",
						x: 20,
						y: 72
					}
				]}
			/>

			<WorkBody spacing="comfortable">
				<p>
					Mapping the activation flow visually helps identify friction points and
					areas where user confidence drops. The following sections show how these
					insights guided the engineering and experience work.
				</p>
			</WorkBody>

			<WorkDeepDive
				spacing="comfortable"
				title="Designing for clarity in a sensitive moment"
				subtitle="Why the activation flow required emotional neutrality, predictable patterns, and motion that supported comprehension—not speed."
			>
				<p>
					Users activating a DNA kit are often excited, anxious, or uncertain. This emotional
					load makes clarity a top priority. We intentionally avoided abrupt transitions,
					busy layouts, and surprising interactions.
				</p>

				<p>
					UI pieces were rebuilt as a stable system: inputs, validation groups, helper text,
					section headers, and call-to-action lanes. When the system behaved predictably,
					people trusted it more.
				</p>

				<ul className="list-disc list-outside">
					<li>Validation appears exactly where the user expects it.</li>
					<li>Section headers double as orientation cues.</li>
					<li>Motion decelerates instead of accelerating—calm, not urgent.</li>
					<li>Copy emphasizes clarity over persuasion.</li>
				</ul>
			</WorkDeepDive>

			<WorkInteractions
				title="Interaction Patterns"
				subtitle="Predictable, lightweight patterns that reduce uncertainty during data entry."
				items={[
					{
						title: "Guided input sequencing",
						body: "Inputs present only the necessary fields per step, reducing overwhelm."
					},
					{
						title: "Predictable validation",
						body: "Errors surface inline and consistently, without modal interruptions."
					},
					{
						title: "Focused transitions",
						body: "Screens transition with soft deceleration to keep the flow calm."
					},
					{
						title: "Unified CTA behavior",
						body: "Primary actions remain in the same visual lane across all steps."
					}
				]}
			/>

			<WorkChallenges
				spacing="default"
				items={[
					{
						title: "High sensitivity inputs",
						body:
							"Names, birthdates, legal acknowledgments, and consent steps needed to feel safe, clear, and precise."
					},
					{
						title: "Traffic volume",
						body:
							"Millions of activations required a flow that performed reliably with low latency and no UI stalls."
					},
					{
						title: "Mixed legacy patterns",
						body:
							"Older patterns had to be replaced slowly while maintaining backward compatibility with production data."
					}
				]}
			/>

			<WorkBeforeAfter
				title="Refining the activation experience"
				subtitle="How the flow changed from scattered and inconsistent to structured, clear, and emotionally grounded."
				before={{
					body: "Inconsistent UI patterns, scattered validation, and unclear sequencing created friction and uncertainty."
				}}
				after={{
					body: "A structured, calm flow with clear validation, consistent layouts, and predictable user guidance."
				}}
			/>

			<WorkCTA variant="dna" spacing="comfortable" />

		</Page>
	);
}
