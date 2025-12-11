// components/home/FeaturedWorkSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionPropsBase } from "@/types/section";

export function HomeFeaturedWorkSection({
	weight,
}: HomeFeaturedWorkSectionProps) {
	return (
		<Section
			weight={weight}
			width="wide"
			className="layout-section-bleed relative bg-surface-alt"
			eyebrow="Selected work"
			title="Products and visuals built for clarity and reliability."
			subtitle="From consumer DNA activation to content-heavy search, here are a few projects where craft mattered end-to-end."
		>
			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{/* Project 1 — DNA Kit Activation */}
				<Card className="bg-card-bg/90 border-border/70 shadow-lg">

					{/* Visual strip / thumbnail */}
					<div className="h-28 md:h-32 w-full bg-[radial-gradient(circle_at_10%_0%,rgba(58,167,255,0.35),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(255,188,120,0.45),transparent_55%)]" />

					<div className="p-5 md:p-6 space-y-3">
						<div className="flex items-center justify-between gap-2">
							<p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-muted">
									Consumer DNA · Ancestry
							</p>
							<Badge variant="soft">Engineering</Badge>
						</div>
						<h3 className="font-heading text-lg md:text-xl text-text">
								DNA kit activation flow
						</h3>
						<p className="text-sm text-text-muted">
								Full-stack React + Node flow for activating DNA kits, built for
								millions of daily users with rock-solid reliability.
						</p>
						<div className="flex flex-wrap gap-2 text-[0.7rem]">
							<Badge variant="outline">React</Badge>
							<Badge variant="outline">TypeScript</Badge>
							<Badge variant="outline">Node</Badge>
							<Badge variant="soft">UX &amp; Motion</Badge>
						</div>
						<ButtonLink
							href="/work/ancestry-dna-kit-activation"
							size="sm"
							className="button-work-ancestry-kit-activation mt-2"
							variant="primary"
						>
								View case study
							<span aria-hidden>↗</span>
						</ButtonLink>
					</div>
				</Card>

				{/* Project 2 — Timeshare / listings */}
				<Card className="bg-card-bg/90 border-border/70 shadow-md">
					<CardContent className="p-0 overflow-hidden">
						<div className="h-28 md:h-32 w-full bg-[radial-gradient(circle_at_0%_0%,rgba(58,167,255,0.26),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(148,163,184,0.4),transparent_55%)]" />

						<div className="p-5 md:p-6 space-y-3">
							<div className="flex items-center justify-between gap-2">
								<p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-muted">
									Property search
								</p>
								<Badge variant="soft">Product</Badge>
							</div>
							<h3 className="font-heading text-lg md:text-xl text-text">
								Timeshare search &amp; rentals
							</h3>
							<p className="text-sm text-text-muted">
								High-clarity search and booking flows for a content-dense
								timeshare platform, tuned for trust and conversion.
							</p>
							<div className="flex flex-wrap gap-2 text-[0.7rem]">
								<Badge variant="outline">Next.js</Badge>
								<Badge variant="outline">TypeScript</Badge>
								<Badge variant="outline">MySQL</Badge>
								<Badge variant="soft">Design systems</Badge>
							</div>
							<ButtonLink
								href="/work/timeshare-search-rentals"
								size="sm"
								className="mt-2"
								variant="primary"
							>
								View case study
								<span aria-hidden>↗</span>
							</ButtonLink>
						</div>
					</CardContent>
				</Card>

				{/* Project 3 — Cinematic / content-heavy */}
				<Card className="bg-card-bg/90 border-border/70 shadow-md md:col-span-2 xl:col-span-1">
					<CardContent className="p-0 overflow-hidden">
						<div className="h-28 md:h-32 w-full bg-[radial-gradient(circle_at_10%_0%,rgba(255,188,120,0.4),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(15,23,42,0.75),transparent_55%)]" />

						<div className="p-5 md:p-6 space-y-3">
							<div className="flex items-center justify-between gap-2">
								<p className="text-xs font-semibold tracking-[0.16em] uppercase text-text-muted">
									Narrative &amp; visual systems
								</p>
								<Badge variant="soft">Cinematic</Badge>
							</div>
							<h3 className="font-heading text-lg md:text-xl text-text">
								Editorial &amp; branded video pieces
							</h3>
							<p className="text-sm text-text-muted">
								Concept, shoot, and edit for pieces that marry product clarity
								with cinematic framing, pacing, and color.
							</p>
							<div className="flex flex-wrap gap-2 text-[0.7rem]">
								<Badge variant="outline">Direction</Badge>
								<Badge variant="outline">Camera</Badge>
								<Badge variant="outline">Edit &amp; color</Badge>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			
		</Section>
	);
}

type HomeFeaturedWorkSectionProps = SectionPropsBase & {

}
