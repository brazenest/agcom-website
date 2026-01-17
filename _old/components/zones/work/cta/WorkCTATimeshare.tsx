// components/zones/work/cta/WorkCTATimeshare.tsx
import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function WorkCTATimeshare() {
	return (
		<Section
			align="left"
			width="wide"
			className="layout-section-bleed bg-surface-alt"
			eyebrow="Next steps"
			title="Working on search, listings, or other clarity-heavy interfaces?"
			subtitle="I build patterns, systems, and flows that reduce noise, increase trust, and help users make confident decisions — even in content-dense environments."
		>
			<div className="flex flex-wrap items-center gap-4">
				<ContactCTAButton size="lg" />
				<ButtonLink href="/work" variant="secondary" size="lg">
          See more work
				</ButtonLink>
			</div>
		</Section>
	);
}
