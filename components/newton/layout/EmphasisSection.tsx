import { ButtonModel } from "@/types/ui"
import { Button } from "../ui/Button"
import { CTABar } from "@/components/newton/ui/CTABar"

export const EmphasisSection = ({
	heading,
	text,
	buttons,
}: EmphasisSectionProps) => {
	return (
		<section className="emphasis-section py-20 lg:py-32 px-6 bg-gray-900 dark:bg-gray-100 rounded-lg text-center">
			<div className="emphasis-section-content">
				<span className="emphasis-section-inner space-y-6">
					<h2 className="emphasis-section-heading font-heading font-bold tracking-tight text-5xl text-gray-100 dark:text-gray-900">{heading}</h2>
					<p className="emphasis-section-text text-xl text-gray-300 dark:text-gray-700">{text}</p>
				</span>
				<div className="emphasis-section-buttons-wrap">
					<CTABar>
						{buttons.map((button, index) => (
							<Button key={index} size="lg" {...button} />
						))}
					</CTABar>
				</div>
			</div>
		</section>
	)
}

type EmphasisSectionProps = {
	heading: string
	text: string
	buttons: ButtonModel[]
}
