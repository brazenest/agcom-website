// components/zones/home/HomeHero.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

export function HomeHero() {
	return (
		<Section
			align="center"
			width="full"
			className="relative overflow-hidden layout-section-bleed"
			eyebrow="Engineering × Cinematic Storytelling"
			title="I build interfaces with product-grade engineering and cinematic polish."
			subtitle="Full-stack software engineer, web designer, and video producer — bridging resilient systems with visuals that feel intentional."
		>
			{/* PRIMARY HERO CONTENT (simple, centered) */}
			<div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
				<div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-text-muted">
					<Pill variant="soft" size="sm">
						Software Engineer &amp; Web Designer
					</Pill>
					<Pill variant="soft" size="sm">
						Video Producer &amp; Photographer
					</Pill>
				</div>

				<div className="flex flex-wrap justify-center gap-3">
					<Button size="lg">
						View Work
					</Button>
					<Button variant="secondary" size="lg">
						Get in Touch
					</Button>
				</div>

				<p className="text-xs md:text-sm text-text-muted max-w-xl">
					From React and TypeScript to lenses and color grades, I handle the
					span from architecture and UI to how it looks and feels in motion.
				</p>
			</div>

			{/* SECONDARY CONTENT BELOW HERO — feels like “intro to the rest” */}
			<div className="mt-10 md:mt-12 w-full">
				<div className="layout-inner xl:layout-inner-wide">
					<div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-stretch">
						{/* Featured flow card */}
						<Card className="relative bg-card-bg/95 border-border/70 shadow-md">
							<CardContent className="p-5 md:p-6 space-y-4">
								<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
									Featured Flow
								</p>
								<h3 className="font-heading text-lg md:text-xl text-text">
									Consumer DNA Kit Activation
								</h3>
								<p className="text-sm text-text-muted">
									A React-based activation experience handling millions of
									users, built for reliability, clarity, and a cinematic sense
									of progress.
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

							{/* Subtle ambient wash */}
							<div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
								<div className="absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl bg-accent/22" />
								<div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full blur-3xl bg-accent-subtle/35" />
							</div>
						</Card>

						{/* Engineering / cinematic quick stats */}
						<Card className="bg-card-bg/90 border-border/60 shadow-sm">
							<CardContent className="p-5 md:p-6 space-y-4">
								<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
									How I work
								</p>

								<div className="space-y-4 text-xs md:text-sm text-text-muted">
									<div className="flex flex-col gap-1">
										<span className="font-semibold text-text">
											Engineering
										</span>
										<span>React, Next.js, TypeScript, Node</span>
										<span>Design systems, reliability, performance</span>
									</div>

									<div className="flex flex-col gap-1">
										<span className="font-semibold text-text">
											Cinematic
										</span>
										<span>Direction, camera, edit, color</span>
										<span>Cohesive visuals for products &amp; stories</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			{/* Background for the whole hero band */}
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
				<div className="absolute -top-24 left-[-10%] h-64 w-64 rounded-full blur-3xl bg-accent/12" />
				<div className="absolute bottom-[-20%] right-[-5%] h-72 w-72 rounded-full blur-3xl bg-accent-subtle/24" />
			</div>
		</Section>
	);
}

export default HomeHero;
