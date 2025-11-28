import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-cta layout-section-bleed bg-bg-alt relative',
}

export function WorkCTA({
	variant = 'general',
	align,
	width,
	spacing = 'comfortable',
	className,
}: WorkCTAProps) {

	// Variant messaging dictionary
	const content = {
		dna: {
			title: "Need an activation flow or onboarding that scales?",
			subtitle:
				"I design flows that reduce friction, guide users clearly, and hold up under massive volume.",
			secondary: "View more engineering work",
			secondaryHref: "/work",
		},
		timeshare: {
			title: "Have a complex interface or content-heavy product?",
			subtitle:
				"I specialize in clarity for dense data: search flows, listings, filters, and systemized components.",
			secondary: "See more product UX work",
			secondaryHref: "/work",
		},
		shadowcat: {
			title: "Need cinematic clarity for a product or story?",
			subtitle:
				"I shoot, edit, and direct pieces that feel intentional—rhythm, color, and camera work included.",
			secondary: "Explore more visuals",
			secondaryHref: "/work",
		},
		general: {
			title: "Have a project in mind?",
			subtitle:
				"Whether engineering, design, or cinematic storytelling, I can help you build something considered.",
			secondary: "Browse all work",
			secondaryHref: "/work",
		},
	} as const

	const { title, subtitle, secondary, secondaryHref } = content[variant]

	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className='flex flex-wrap gap-4'>
				<ContactCTAButton size='lg' />

				<ButtonLink href={secondaryHref} variant='secondary' size='lg'>
					{secondary}
				</ButtonLink>
			</div>
		</Section>
	);
}

export default WorkCTA

type WorkCTAVariant = 'dna' | 'timeshare' | 'shadowcat' | 'general'

type WorkCTAProps = WorkSectionPropsBase & {
	variant?: WorkCTAVariant
}
