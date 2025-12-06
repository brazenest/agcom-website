// components/zones/work/WorkBody.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"

const defaults = {
	className: 'work-body',
	innerClassName: 'space-y-6 w-full',
}

export const WorkBody = ({
	weight = 0,
	align = 'left',
	width = 'default',
	spacing = 'default',
	className,
	eyebrow,
	title,
	subtitle,
	content,
	children
}: WorkBodyProps) => {

	const innerClassName = (!title && !subtitle && !eyebrow) ? 'w-full' : ''

	return (
		<Section
			weight={weight}
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			eyebrow={eyebrow}
			title={title}
			subtitle={subtitle}
		>
			<div className={cn(defaults.innerClassName, innerClassName)}>
				<div className="layout-prose text-start">
					{children ? children : content}
				</div>
			</div>
		</Section>
	)
}

type WorkBodyProps = WorkSectionPropsBase & {
	content?: React.ReactNode
	children?: React.ReactNode
}
