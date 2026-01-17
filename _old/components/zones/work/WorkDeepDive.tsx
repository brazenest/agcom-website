// components/zones/work/WorkDeepDive.tsx
import { cn } from "@/lib/cn"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"

const defaults = {
	className: 'work-deepdive',
	eyebrow: 'Deep Dive',
}

export const WorkDeepDive = ({
	weight = 0,
	align,
	width,
	spacing = 'default',
	className,
	eyebrow = defaults.eyebrow,
	title,
	subtitle,
	content,
	children
}: WorkDeepDiveProps) => (
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
		<div className="layout-prose space-y-6 text-fg-alt">
			{children ? children : content}
		</div>
	</Section>
)

type WorkDeepDiveProps = WorkSectionPropsBase & {
	content?: React.ReactNode
	children?: React.ReactNode
}
