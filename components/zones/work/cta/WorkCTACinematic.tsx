import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function WorkCTACinematic() {
	return (
		<Section
			align="left"
			width="wide"
			className="layout-section-bleed bg-surface-alt"
			eyebrow="Next steps"
			title="Have a story, brand piece, or visual narrative to shape?"
			subtitle="I direct, shoot, and edit cinematic work with a focus on clarity, pacing, and visual intention — whether it's a brand spot or an editorial piece."
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
