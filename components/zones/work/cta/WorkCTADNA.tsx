// components/zones/work/cta/WorkCTADNA.tsx
import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function WorkCTADNA() {
	return (
		<Section
			align="left"
			width="wide"
			className="layout-section-bleed bg-surface-alt"
			eyebrow="Next steps"
			title="Have a large-scale product that needs reliability and clarity?"
			subtitle="I help teams refine complex flows, tighten interactions, and ship systems that handle real-world scale without surprises."
		>
			<div className="flex flex-wrap items-center gap-4">
				<ContactCTAButton size="lg" />
				<ButtonLink href="/work" variant="secondary" size="lg">
          View more work
				</ButtonLink>
			</div>
		</Section>
	);
}
