// components/home/WhatIDoSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";

export function HomeWhatIDoSection() {
	return (
		<Section
			align="left"
			width="default"
			eyebrow="What I do"
			title="Engineering, visuals, and the glue between them."
			subtitle="I’m most useful when I can bridge product thinking, implementation, and how it feels to actually use and see the thing."
		>
			<div className="layout-prose space-y-6 text-sm md:text-base text-text-muted">
				<p>
					The work usually starts on the product side: designing and building
					web experiences with React, TypeScript, Next.js, and Tailwind. From
					component libraries to data flows, I focus on making the interface
					clear, fast, and reliable.
				</p>

				<div className="space-y-2">
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
		</Section>
	);
}

export default HomeWhatIDoSection;
