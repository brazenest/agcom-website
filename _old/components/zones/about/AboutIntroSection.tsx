import { Section } from "@/components/ui/Section"
import { AboutIntroHeadshot } from './intro/AboutIntroHeadshot'
import { AboutIntroBio } from './intro/AboutIntroBio'
import { SectionPropsBase } from "@/types/section"

export const AboutIntroSection = ({
	weight = 0,
}: AboutIntroSectionProps) => (
	<Section
		weight={weight}
		eyebrow="About"
		title="Hi, I’m Alden — I bridge product-grade engineering with cinematic storytelling."
		subtitle="Full-stack software engineer, web designer, and video producer / photographer."
	>
		<div className="grid gap-8 md:grid-cols-[auto,minmax(0,1fr)] items-start">

			<AboutIntroHeadshot />
			<AboutIntroBio />

		</div>
	</Section>
)

type AboutIntroSectionProps = SectionPropsBase & {

}
