// components/zones/work/WorkCTA.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton"
import { ButtonLink } from "@/components/ui/ButtonLink"
import workData from "@/data/work.json" assert { type: "json" }

const defaults = {
	className: 'work-cta layout-section-bleed bg-bg-alt relative',
}

export const WorkCTA = ({
	variant = 'general',
	weight = 5,
	align,
	width,
	spacing = 'spacious',
	className,
}: WorkCTAProps) => {

	const ctaData = workData.caseStudies["shadowcat-bellagio-fountains"].sections.cta
	const { title, subtitle, secondary, secondaryHref } = ctaData.content[variant]

	return (
		<Section
			weight={weight}
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className='flex flex-wrap gap-4 justify-center'>

				<ContactCTAButton size='lg'>
					{ctaData.primaryButton?.text || 'Get in touch'}
				</ContactCTAButton>

				<ButtonLink href={secondaryHref} variant='secondary' size='lg'>
					{secondary}
				</ButtonLink>

			</div>
		</Section>
	)
}

type WorkCTAVariant = 'dna' | 'timeshare' | 'shadowcat' | 'general'

type WorkCTAProps = WorkSectionPropsBase & {
	variant?: WorkCTAVariant
}
