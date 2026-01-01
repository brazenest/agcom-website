import { SplitContentVariant } from "@/types/newton/content"
import { PageTitle } from "../ui/PageTitle"
import { Section } from "./Section"
import { cn } from "@/lib/cn"
import { Panel } from "../ui/Panel"

export const SplitContentPanelSection = ({ id, title, subtitle, leftContent, rightContent, variant = 'half' }: SplitContentSectionProps) => {
	if (!leftContent || !rightContent) throw new Error("Both leftContent and rightContent props are required.")

	const variantClasses: SplitContentVariantClasses = {
		'half': {
			'left': 'md:w-1/2',
			'right': 'md:w-1/2',
		},
		'two-thirds': {
			'left': 'md:w-2/3',
			'right': 'md:w-1/3',
		},
		'one-third': {
			'left': 'md:w-1/3',
			'right': 'md:w-2/3',
		},
		'two-fifths': {
			'left': 'md:w-2/5',
			'right': 'md:w-3/5',
		},
		'three-fifths': {
			'left': 'md:w-3/5',
			'right': 'md:w-2/5',
		},
	}
	const leftVariantClass = variantClasses[variant]['left']
	const rightVariantClass = variantClasses[variant]['right']
	return (
		<Section id={id}>
			{title && (
				<PageTitle title={title} subtitle={subtitle} />
			)}
			<Panel>
				<div className="flex flex-col md:flex-row gap-5">
					<span className={cn(leftVariantClass)}>
						{leftContent}
					</span>
					<span className={cn(rightVariantClass)}>
						{rightContent}
					</span>
				</div>
			</Panel>
		</Section>
	)
}

type SplitContentSectionProps = {
	id: string
	title?: string
	subtitle?: string
	leftContent: React.ReactNode
	rightContent: React.ReactNode
	variant: SplitContentVariant
}

type SplitContentVariantClasses = {
	[key in SplitContentVariant]: {
		'left': string
		'right': string
	}
}