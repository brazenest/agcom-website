// app/work/page.tsx
export const dynamic = "force-dynamic";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Page } from "@/components/ui/Page";

export default function WorkIndexPage() {
	return (
		<Page id="work">
			<Section
				align="left"
				width="default"
				eyebrow="Selected work"
				title="Products and projects where engineering and cinematic craft overlap."
				subtitle="A mix of production systems, UX flows, and visual work. This will grow over time as I add more detailed case studies."
			>
				<p className="layout-prose text-sm md:text-base text-text-muted">
          I’m most interested in work where reliability and clarity matter, and
          where visuals are doing more than just decorating the interface.
				</p>
			</Section>

			<Section
				align="left"
				width="wide"
				eyebrow="Case studies"
				title="A few concrete examples."
				subtitle="Deep dives are still a work in progress, but these are representative of the kind of work I like to do."
			>
				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{/* Ancestry DNA activation */}
					<Card className="bg-card-bg border-border/70 shadow-sm">
						<CardContent className="p-5 md:p-6 space-y-3">
							<div className="flex items-center justify-between gap-2 text-xs text-text-muted">
								<span className="font-semibold tracking-[0.16em] uppercase">
                  Consumer DNA · Ancestry
								</span>
								<Pill variant="soft" size="sm">
                  Engineering
								</Pill>
							</div>
							<h3 className="font-heading text-base md:text-lg text-text">
                Consumer DNA Kit Activation
							</h3>
							<p className="text-sm text-text-muted">
                React-based activation flow handling millions of users, focused
                on reliability, clarity, and a cinematic sense of progress.
							</p>
							<div className="flex flex-wrap gap-2 text-[0.7rem] text-text-muted">
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
							<div className="pt-2">
								<ButtonLink href="/work/ancestry-dna-activation" variant="secondary">
                  View case study
								</ButtonLink>
							</div>
						</CardContent>
					</Card>

					{/* Placeholder for future work */}
					<Card className="bg-card-bg border-border/70 shadow-sm">
						<CardContent className="p-5 md:p-6 space-y-3">
							<div className="flex items-center justify-between gap-2 text-xs text-text-muted">
								<span className="font-semibold tracking-[0.16em] uppercase">
                  Coming soon
								</span>
								<Pill variant="soft" size="sm">
                  Cinematic
								</Pill>
							</div>
							<h3 className="font-heading text-base md:text-lg text-text">
                Editorial / branded video pieces
							</h3>
							<p className="text-sm text-text-muted">
                Concept, shoot, and edit for pieces that marry product clarity
                with cinematic framing, pacing, and color.
							</p>
							<div className="flex flex-wrap gap-2 text-[0.7rem] text-text-muted">
								<Pill variant="subtle" size="sm">
                  Direction
								</Pill>
								<Pill variant="subtle" size="sm">
                  Camera
								</Pill>
								<Pill variant="subtle" size="sm">
                  Edit &amp; Color
								</Pill>
							</div>
						</CardContent>
					</Card>
				</div>
			</Section>
		</Page>
	);
}
