import { ImageModel } from "@/types/content"
import { Section } from "./layout/Section"
import { ActionModel } from "@/types/ui"
import { CTABar } from "./layout/CTABar"
import { Action } from "./ui/Action"
import { PageTitle } from "./layout/PageTitle"
import { cn } from "@/lib/cn"
import { HeroSectionAlignClassMap, HeroSectionAlign } from "@/types/layout"

export const HeroSection = ({
	id = 'hero-section',
	align = 'center',
	backgroundImage,
	title,
	subtitle,
	actions,
	className,
}: HeroSectionProps) => {

	const alignClasses: HeroSectionAlignClassMap = {
		center: {
			actionsWrap: 'mx-auto',
		},
		left: {
			actionsWrap: '',
		},
	}

	return (
		<Section id={id}
			width="wide"
			backgroundImage={backgroundImage}
			className={cn('hero-section bg-gray-200 dark:bg-gray-950 py-10 lg:py-27.5 relative overflow-hidden', className)}
		>
			<PageTitle align={align} title={title} subtitle={subtitle} />

			{actions && (
				<div className={cn("hero-section-actions-wrap", alignClasses[align].actionsWrap)}>
					<CTABar className="mt-3.25">
						{actions.map((button, index) => (
							<Action key={index} size="lg" href={button.href!} variant={button.variant}>
								{button.text}
							</Action>
						))}
					</CTABar>
				</div>
			)}

		</Section>
	)
}

type HeroSectionProps = {
	id?: string
	align?: HeroSectionAlign
	backgroundImage?: ImageModel
	title: string
	subtitle?: string
	actions?: ActionModel[]
	className?: string
}
