// app/work/ancestry-dna-activation/page.tsx
export const dynamic = "force-dynamic";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Page } from "@/components/ui/Page";

export default function AncestryDNAActivationPage() {
	return (
		<Page id="work-ancestry-dna-activation">
			{/* Hero */}
			<Section
				align="left"
				width="wide"
				eyebrow="Case Study · Ancestry"
				title="Consumer DNA Kit Activation"
				subtitle="A React-based activation flow handling millions of users, built for reliability, clarity, and a cinematic sense of progress."
			>
				<div className="flex flex-wrap gap-3 text-xs md:text-sm text-text-muted">
					<Pill variant="soft" size="sm">
						Full-stack Engineer
					</Pill>
					<Pill variant="subtle" size="sm">
						React
					</Pill>
					<Pill variant="subtle" size="sm">
						TypeScript
					</Pill>
					<Pill variant="subtle" size="sm">
						Node
					</Pill>
					<Pill variant="subtle" size="sm">
						UX &amp; Motion
					</Pill>
				</div>
			</Section>

			{/* Context / problem */}
			<Section
				align="left"
				width="default"
				eyebrow="Context"
				title="Helping people get from kit to insights without friction."
				subtitle="The activation flow is the first real interaction most customers have with the DNA product — it has to be clear, trustworthy, and resilient."
			>
				<div className="layout-prose text-sm md:text-base text-text-muted space-y-4">
					<p>
						Here you can describe the previous state of the activation flow,
						what was at risk (support load, churn, trust), and the constraints:
						traffic volume, internal APIs, brand requirements, etc.
					</p>
					<p>
						You can also highlight your role in shaping both the underlying
						architecture and the surface-level experience: collaborating with
						product, design, and other engineers.
					</p>
				</div>
			</Section>

			{/* System / approach – wide, more structured */}
			<Section
				align="left"
				width="wide"
				eyebrow="System & Approach"
				title="Architecture and UX decisions for a resilient flow."
				subtitle="Making sure the front-end, back-end, and UX all support a high-volume, high-stakes activation journey."
			>
				<div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-text-muted">
					<Card className="bg-card-bg border-border/70 shadow-sm">
						<CardContent className="p-5 md:p-6 space-y-2">
							<h3 className="font-heading text-sm md:text-base text-text">
								Front-end
							</h3>
							<p className="text-xs md:text-sm">
								React/Next.js flow with clear states, inline validation, and
								motion tuned to keep people oriented instead of overwhelmed.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-card-bg border-border/70 shadow-sm">
						<CardContent className="p-5 md:p-6 space-y-2">
							<h3 className="font-heading text-sm md:text-base text-text">
								Back-end
							</h3>
							<p className="text-xs md:text-sm">
								Node services integrating with internal APIs, with attention to
								failure modes, idempotency, and observability.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-card-bg border-border/70 shadow-sm">
						<CardContent className="p-5 md:p-6 space-y-2">
							<h3 className="font-heading text-sm md:text-base text-text">
								Experience
							</h3>
							<p className="text-xs md:text-sm">
								Progressive disclosure, trust-building copy, and motion that
								reinforces progress without feeling like UI “flair.”
							</p>
						</CardContent>
					</Card>
				</div>
			</Section>

			{/* Outcomes / closing CTA */}
			<Section
				align="left"
				width="default"
				eyebrow="Outcomes"
				title="What this unlocked."
				subtitle="Summarize impact in terms of reliability, support load, or user behavior."
			>
				<div className="layout-prose text-sm md:text-base text-text-muted space-y-4">
					<p>
						You can add specific outcomes here: reduced support volume, fewer
						activation drop-offs, clearer metrics, or better team velocity
						because the flow was easier to reason about.
					</p>
				</div>
			</Section>

			<Section
				align="left"
				width="wide"
				className="layout-section-bleed relative bg-surface-alt"
				eyebrow="Next project"
				title="Want to talk about a similar flow or product?"
				subtitle="Happy to dig into activation, onboarding, or high-volume flows where reliability and clarity really matter."
			>
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<p className="text-sm md:text-base text-text-muted max-w-xl">
						If you’re working on something with similar stakes — heavy traffic,
						first-time trust, or complex internal systems — this is the kind of
						work where I’m most useful.
					</p>
					<div className="flex flex-wrap gap-3">
						<ButtonLink href="/contact" variant="secondary">
							Get in touch
						</ButtonLink>
						<ButtonLink href="/work" variant="secondary">
							Back to work index
						</ButtonLink>
					</div>
				</div>

				<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
					<div className="absolute -top-16 right-0 h-40 w-40 rounded-full blur-3xl bg-accent/20" />
					<div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full blur-3xl bg-accent-subtle/35" />
				</div>
			</Section>
		</Page>
	);
}
