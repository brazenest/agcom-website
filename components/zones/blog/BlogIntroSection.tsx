"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import * as React from "react";

export function BlogIntroSection() {
	return (
		<Section
			align="left"
			eyebrow="Journal"
			title="Notes from the engineering × cinematic edge."
			subtitle="Long-form breakdowns, process notes, and experiments from building real products and telling stories on screen."
			className="bg-bg"
		>
			<div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
				{/* Left: positioning + CTAs */}
				<div className="space-y-5">
					<p className="text-text-muted max-w-xl">
                        I write about the overlap between product-grade engineering and
                        cinematic craft: architecture decisions, UX details, motion, color,
                        and the messy middle where it all comes together.
					</p>

					<div className="flex flex-wrap gap-2">
						<Badge variant="soft">Engineering case studies</Badge>
						<Badge variant="soft">Design systems</Badge>
						<Badge variant="outline">Cinematic process</Badge>
					</div>

					<div className="flex flex-wrap gap-3 pt-2">
						<Button size="md">
                            Read latest articles
						</Button>
						<Button variant="ghost" size="md">
                            Browse by topic
						</Button>
					</div>

					<p className="text-xs text-text-muted pt-2">
                        Expect fewer hot takes and more: diagrams, timelines, failures,
                        rewrites, and why certain details matter.
					</p>
				</div>

				{/* Right: highlight a “featured” post shell you can wire up later */}
				<Card className="bg-card-bg shadow-md border-border/70">
					<CardContent className="p-5 md:p-6 space-y-4">
						<p className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-text-muted">
                            Featured article
						</p>
						<h3 className="font-heading text-lg md:text-xl text-text">
                            Designing activation flows like film sequences
						</h3>
						<p className="text-sm text-text-muted">
                            How I approached the Ancestry DNA kit activation experience as a
                            series of cinematic beats: framing, pacing, reveal, and payoff —
                            while still shipping production-ready React.
						</p>

						<div className="flex flex-wrap gap-2 text-[0.7rem]">
							<Badge variant="soft">React</Badge>
							<Badge variant="soft">UX & Motion</Badge>
							<Badge variant="outline">Story structure</Badge>
						</div>

						<div className="pt-3">
							<Button variant="secondary" size="sm">
                                Open article
							</Button>
						</div>
					</CardContent>

					{/* Ambient accent wash */}
					<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
						<div className="absolute -top-12 -right-8 h-32 w-32 rounded-full blur-3xl bg-accent/24" />
						<div className="absolute -bottom-16 -left-8 h-32 w-32 rounded-full blur-3xl bg-accent-subtle/40" />
					</div>
				</Card>
			</div>
		</Section>
	);
}

export default BlogIntroSection;
