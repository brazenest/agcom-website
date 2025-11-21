// components/home/HomeContactSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function HomeContactSection() {
	return (
		<Section
			align="left"
			width="wide"
			className="layout-section-bleed relative bg-surface-alt"
			eyebrow="Next steps"
			title="Have a product, story, or project in mind?"
			subtitle="Whether you need an engineer, a director, or both, I can help plan, build, and ship something considered."
		>
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div className="space-y-2 max-w-xl">
					<p className="text-sm md:text-base text-text-muted">
            I work well on product teams, in close collaboration with designers,
            or directly with founders and producers. Tell me what you’re trying
            to make and where you’re stuck.
					</p>
					<p className="text-xs text-text-muted/80">
            Engineering + cinematic storytelling, end-to-end — or just the
            piece you need.
					</p>
				</div>

				<div className="flex flex-wrap gap-3">
					<Button size="lg">
            Get in touch
					</Button>
					<Button variant="secondary" size="lg">
            View work
					</Button>
				</div>
			</div>

			{/* Ambient CTA wash */}
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
				<div className="absolute -top-16 right-0 h-40 w-40 rounded-full blur-3xl bg-accent/20" />
				<div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full blur-3xl bg-accent-subtle/35" />
			</div>
		</Section>
	);
}

export default HomeContactSection;
