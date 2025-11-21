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
			<div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-text-muted">
				<div className="space-y-3">
					<h3 className="font-heading text-sm md:text-base text-text">
            Software Engineering &amp; Web Design
					</h3>
					<p>
            Building polished web applications with React, TypeScript, Next.js,
            and Tailwind — from prototypes to production systems.
					</p>
					<ul className="space-y-1.5 text-xs md:text-sm">
						<li>• Component libraries and design systems</li>
						<li>• API integration and data modeling</li>
						<li>• Performance, accessibility, and reliability</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h3 className="font-heading text-sm md:text-base text-text">
            Video Production &amp; Photography
					</h3>
					<p>
            Concepting, planning, and shooting projects that support products,
            brands, and people with cinematic clarity.
					</p>
					<ul className="space-y-1.5 text-xs md:text-sm">
						<li>• Pre-production, storyboarding, and planning</li>
						<li>• Direction, camera, and on-set decisions</li>
						<li>• Edit, color, and finishing for delivery</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h3 className="font-heading text-sm md:text-base text-text">
            Design Systems &amp; Motion
					</h3>
					<p>
            Defining systems, tokens, and motion patterns that keep teams
            shipping fast without losing coherence.
					</p>
					<ul className="space-y-1.5 text-xs md:text-sm">
						<li>• Token-based color and typography scales</li>
						<li>• Interaction and motion patterns</li>
						<li>• Documentation and UI inventories</li>
					</ul>
				</div>
			</div>
		</Section>
	);
}

export default HomeWhatIDoSection;
