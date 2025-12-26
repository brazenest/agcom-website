// components/home/WhatIDoSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { SectionPropsBase } from "@/types/section";
import { Panel } from "@/components/ui/Panel";

export function HomeWhatIDoSection({
	weight,
}: HomeWhatIDoSectionProps) {
	return (
		<Section
			weight={weight}
			eyebrow="What I do"
			title="How I move between code, design, and camera."
			subtitle="I work across architecture, UI, pacing, and color — shaping both how things function and how they feel to use."
		>
			<div className="grid gap-8 md:grid-cols-[0.4fr,1fr] items-start">

				{/* Right content (your three blocks) */}
				<div className="grid gap-8 md:grid-cols-2 text-sm md:text-base text-text-muted">
					{/* your 3 existing <div className="space-y-3"> blocks */}

					<Panel>
						<h3 className="font-heading text-sm md:text-base text-text">
							Video Production &amp; Photography
						</h3>
						<p>
							Concepting, planning, and shooting projects that support products,
							brands, and people with cinematic clarity.
						</p>
						<ul className="list-disc ms-4 space-y-1.5 text-xs md:text-sm">
							<li>Pre-production, storyboarding, and planning</li>
							<li>Direction, camera, and on-set decisions</li>
							<li>Edit, color, and finishing for delivery</li>
						</ul>
					</Panel>

					<Panel>
						<h3 className="font-heading text-sm md:text-base text-text">
							Design Systems &amp; Motion
						</h3>
						<p>
							Defining systems, tokens, and motion patterns that keep teams
							shipping fast without losing coherence.
						</p>
						<ul className="list-disc ms-4 space-y-1.5 text-xs md:text-sm">
							<li>Token-based color and typography scales</li>
							<li>Interaction and motion patterns</li>
							<li>Documentation and UI inventories</li>
						</ul>
					</Panel>

				</div>

			</div>
		</Section>
	);
}

type HomeWhatIDoSectionProps = SectionPropsBase & {

}
