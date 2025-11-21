// components/home/HomeHero.tsx
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import * as React from "react";

export function HomeHero() {
	return (
		<Section
			align="left"
			width="full"
			className="relative overflow-hidden layout-section-bleed"
			eyebrow="Engineering × Cinematic Storytelling"
			title="Bridging product-grade engineering with cinematic craft."
			subtitle="I design and build web experiences that feel as intentional as a well-cut scene — precise systems under the hood, cinematic polish on the surface."
		>
			<div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] xl:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-center">
				{/* Left: copy + CTAs */}
				<div className="space-y-6">
					<div className="flex flex-wrap gap-2">
						<Badge variant="soft">Software Engineer &amp; Web Designer</Badge>
						<Badge variant="outline">Video Producer &amp; Photographer</Badge>
					</div>

					<p className="text-text-muted max-w-xl">
                        From React and TypeScript to lenses and color grades, I work
                        end-to-end: systems, UI, and the visuals that tell the story.
					</p>

					<div className="flex flex-wrap gap-3">
						<Button size="lg">
                            View Work
						</Button>
						<Button variant="secondary" size="lg">
                            Get in Touch
						</Button>
					</div>

					<div className="flex flex-wrap gap-4 pt-4 text-xs text-text-muted">
						<div className="flex flex-col">
							<span className="font-semibold text-text">Engineering</span>
							<span>React, Next.js, TypeScript</span>
						</div>
						<div className="flex flex-col">
							<span className="font-semibold text-text">Cinematic</span>
							<span>Direction, Camera, Edit, Color</span>
						</div>
					</div>
				</div>

				{/* Right: “hero card” – feels like a product shot / frame */}
				<Card className="relative bg-card-bg shadow-lg border-border/70">
					<CardContent className="p-5 md:p-6 space-y-4">
						<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
                            Featured Flow
						</p>
						<h3 className="font-heading text-xl md:text-2xl text-text">
                            Consumer DNA Kit Activation
						</h3>
						<p className="text-sm text-text-muted">
                            A React-based activation experience handling millions of users,
                            built for reliability, clarity, and a cinematic sense of progress.
						</p>

						<div className="flex flex-wrap gap-2 text-[0.7rem]">
							<Badge variant="soft">React</Badge>
							<Badge variant="soft">TypeScript</Badge>
							<Badge variant="soft">Node</Badge>
							<Badge variant="outline">UX &amp; Motion</Badge>
						</div>

						<div className="mt-4 text-[0.7rem] text-text-muted">
							<span className="inline-flex h-2 w-2 rounded-full bg-accent mr-2" />
                            Live production system · millions of activations
						</div>
					</CardContent>

					{/* Ambient engineering/cinematic wash */}
					<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
						<div className="absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl bg-accent/25" />
						<div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full blur-3xl bg-accent-subtle/40" />
					</div>
				</Card>
			</div>
		</Section>
	);
}

export default HomeHero;
