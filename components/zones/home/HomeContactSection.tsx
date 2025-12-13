// components/home/HomeContactSection.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { SectionPropsBase } from "@/types/section";

export function HomeContactSection({
	weight,
}: HomeContactSectionProps) {
	return (
		<Section
			weight={weight}
			align="center"
			width="wide"
			className="section-space-tight-bottom layout-section-bleed relative bg-surface-alt"
			eyebrow="Next steps"
			title="Let’s build something great together!"
			subtitle="Whether you need end-to-end engineering and cinematic storytelling or just a specific slice, I’m ready to help you make it happen."
		>
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div className="space-y-2 max-w-xl">
					<p className="text-xs text-muted mt-3">
						I work well on product teams, in close collaboration with designers,
						or directly with founders and producers. Tell me what you’re trying
						to make and where you’re trying to go.
					</p>
					<p className="text-xs text-text-muted/80">
						Ready to get started? Reach out with an opportunity or for a free consultation.
					</p>
				</div>

				<div className="flex flex-wrap gap-3 justify-center">
					<ContactCTAButton size="xl" />
					<ButtonLink href="/work" variant="secondary" size="xl">
						View work
					</ButtonLink>
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

type HomeContactSectionProps = SectionPropsBase & {

}