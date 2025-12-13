import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function WorkCTAHybrid() {
	return (
		<Section
			align="left"
			width="wide"
			className="layout-section-bleed bg-surface-alt"
			eyebrow="Next steps"
			title="Working on something that blends engineering and cinematic craft?"
			subtitle="From interactive visuals to product videos and UI motion, I help bridge the technical and the cinematic so the experience feels intentional end-to-end."
		>
			<div className="flex flex-wrap items-center gap-4">
				<ContactCTAButton size="lg" />
				<ButtonLink href="/work" variant="secondary" size="lg">
          See all case studies
				</ButtonLink>
			</div>
		</Section>
	);
}
