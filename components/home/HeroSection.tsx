import { ImageModel } from "@/types/content"
import { Section } from "../newton/layout/Section"
import { ButtonModel } from "@/types/ui"
import { CTABar } from "../newton/ui/CTABar"
import { Button } from "../newton/ui/Button"

export const HeroSection = ({
	id = 'hero-section',
	backgroundImage,
	title,
	subtitle,
	actions,
}: HeroSectionProps) => {
	return (
		<Section id={id}
			width="full"
			backgroundImage={backgroundImage}
			className="hero-section bg-gray-100 dark:bg-gray-900 py-20 lg:py-28 text-center relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-black/40"></div>
			<div className="relative z-10 text-white">

				<h1 className="max-w-4xl mx-auto text-6xl font-heading font-semibold leading-21.75 mb-8.5">{title}</h1>
				{subtitle && (
					<p className="max-w-4xl mx-auto text-2xl text-gray-500 dark:text-gray-500">{subtitle}</p>
				)}
				{actions && (

					<div className="hero-section-actions-wrap">
						<CTABar>
							{actions.map((button, index) => (
								<Button key={index} size="lg" {...button} />
							))}
						</CTABar>
					</div>
				)}

			</div>
		</Section>
	)
}

type HeroSectionProps = {
	id?: string
	backgroundImage: ImageModel
	title: string
	subtitle?: string
	actions?: ButtonModel[]
}
