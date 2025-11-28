// components/home/WhatIDoSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";

export function HomeWhatIDoSection() {
	return (
		<Section
			align="left"
			width="default"
			eyebrow="What I do"
			title="How I move between code, design, and camera."
			subtitle="I work across architecture, UI, pacing, and color — shaping both how things function and how they feel to use."
		>
			<div className="grid gap-8 md:grid-cols-[0.4fr,1fr] items-start">
				{/* Left title column */}
				<div className="space-y-2 pr-4 border-r border-border/40">
					<h3 className="font-heading text-base md:text-lg text-text">What I do</h3>
					<p className="text-sm text-text-muted max-w-xs">
						A mix of engineering, design systems, and cinematic execution.
					</p>
				</div>


				{/* Right content (your three blocks) */}
				<div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-text-muted">
					{/* your 3 existing <div className="space-y-3"> blocks */}
					<div className="space-y-2 pt-2 border-t border-border/60">
						<h3 className="font-heading text-sm md:text-base text-text">
							Software Engineering &amp; Web Design
						</h3>
						<p>
							Building polished web applications from prototypes to production
							systems.
						</p>
						<ul className="list-disc ms-4 space-y-1.5 text-xs md:text-sm">
							<li>Component libraries and design systems</li>
							<li>API integration and data modeling</li>
							<li>Performance, accessibility, and reliability</li>
						</ul>
					</div>

					<div className="space-y-2 pt-2 border-t border-border/60">
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
					</div>

					<div className="space-y-2 pt-2 border-t border-border/60">
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
					</div>
				</div>

				

				
			</div>
		</Section>
	);
}

export default HomeWhatIDoSection;
