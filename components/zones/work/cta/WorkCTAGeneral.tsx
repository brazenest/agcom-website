import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function WorkCTAGeneral() {
	return (
		<Section
			align="left"
			width="wide"
			className="layout-section-bleed bg-surface-alt"
			eyebrow="Get in touch"
			title="Have a role or project where this kind of work is valuable?"
			subtitle="Whether it’s refining a flow, building a system, or shaping the visuals around it, I can help bring clarity and intention to your product."
		>
			<div className="flex flex-wrap items-center gap-4">
				<ContactCTAButton size="lg" />
				<ButtonLink href="/work" variant="secondary" size="lg">
          View all case studies
				</ButtonLink>
			</div>
		</Section>
	);
}
