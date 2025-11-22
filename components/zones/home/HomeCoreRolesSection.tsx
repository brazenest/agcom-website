// components/home/CoreRolesSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

export function HomeCoreRolesSection() {
	return (
		<Section
			align="left"
			width="default"
			eyebrow="Core roles"
			title="Two primary lenses. One cohesive point of view."
			subtitle="I move between engineering and cinematic work, but the bar is the same: clarity, intention, and polish."
			className="bg-bg-alt layout-section-tight"
		>
			<div className="grid gap-6 md:grid-cols-2">
				{/* Engineering role */}
				<Card className="bg-card-bg border-border/70 shadow-sm">
					<CardContent className="p-5 md:p-6 space-y-3">
						<Badge variant="soft" className="text-xs">
              Software Engineer &amp; Web Designer
						</Badge>
						<h3 className="font-heading text-lg md:text-xl text-text">
              Product-grade engineering
						</h3>
						<p className="text-sm text-text-muted">
              Building production-ready web experiences with React, Next.js,
              TypeScript, and thoughtful system design.
						</p>
						<ul className="text-xs text-text-muted space-y-1.5">
							<li>• Design systems and component libraries</li>
							<li>• Robust data flows and API integration</li>
							<li>• Accessibility, performance, and reliability</li>
						</ul>
					</CardContent>
				</Card>

				{/* Cinematic role */}
				<Card className="bg-card-bg border-border/70 shadow-sm">
					<CardContent className="p-5 md:p-6 space-y-3">
						<Badge variant="outline" className="text-xs">
              Video Producer &amp; Photographer
						</Badge>
						<h3 className="font-heading text-lg md:text-xl text-text">
              Cinematic storytelling
						</h3>
						<p className="text-sm text-text-muted">
              Planning, shooting, and editing visual narratives that support
              products, brands, and people.
						</p>
						<ul className="text-xs text-text-muted space-y-1.5">
							<li>• Direction, storyboarding, and shot planning</li>
							<li>• Camera operation, lighting, and framing</li>
							<li>• Edit, color, and delivery for web &amp; film</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</Section>
	);
}

export default HomeCoreRolesSection;
