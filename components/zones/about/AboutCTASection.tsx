import { Section } from "@/components/ui/Section"
import { ContactCTAButton } from "../contact/ContactCTAButton"
import { ButtonLink } from "@/components/ui/ButtonLink"
import { SectionPropsBase } from "@/types/section"

export const AboutCTASection = ({
	weight = 0,
}: AboutCTASectionProps) => (
	<Section
		weight={weight}
		align="center"
		width="wide"
		className="layout-section-bleed relative bg-surface-alt"
		eyebrow="Next steps"
		title="Have a role or project where this combination is useful?"
		subtitle="I’m open to full-time roles and select freelance work where the mix of engineering and cinematic storytelling truly matters."
	>
		<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<p className="text-sm md:text-base text-text-muted max-w-xl">
				Whether you need someone deep in the code, helping shape the
				interface, or working on visuals that explain it, I’m usually most
				helpful when I can sit across a couple of those layers at once.
			</p>
			<div className="flex flex-wrap gap-3 justify-center">
				<ContactCTAButton size="lg" />
				
				<ButtonLink variant="secondary" size="lg" href="/work">
					View work
				</ButtonLink>
			</div>
		</div>
	</Section>
)

type AboutCTASectionProps = SectionPropsBase & {

}
