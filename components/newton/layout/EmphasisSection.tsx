import { ActionModel } from "@/types/ui"
import { CTABar } from "@/components/newton/layout/CTABar"
import { Action } from "../ui/Action"

export const EmphasisSection = ({
	id,
	heading,
	text,
	actions,
}: EmphasisSectionProps) => {
	return (
		<section id={id} className="emphasis-section py-12 lg:py-24 px-6 bg-gray-900 dark:bg-gray-100 text-center">
			<div className="emphasis-section-content">
				<span className="emphasis-section-inner pb-3 block">
					<h2 className="emphasis-section-heading max-w-6xl mx-auto font-heading font-bold lg:font-medium tracking-tight leading-13.25 md:leading-19.25 text-5xl lg:text-6xl text-gray-100 dark:text-gray-900 mb-4">{heading}</h2>
					<p className="emphasis-section-text max-w-3xl mx-auto text-lg leading-6.5 text-gray-400 dark:text-gray-600">{text}</p>
				</span>
				<div className="emphasis-section-actions-wrap">
					<CTABar className="mt-4.5">
						{actions.map((action, index) => (
							<Action key={index} size="lg" href={action.href} variant={action.variant} onClick={action.onClick}>
								{action.text}
							</Action>
						))}
					</CTABar>
				</div>
			</div>
		</section>
	)
}

type EmphasisSectionProps = {
	id: string
	heading: string
	text: string
	actions: ActionModel[]
}
