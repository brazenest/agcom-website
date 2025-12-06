// components/work/WorkDiagram.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"

const defaults = {
	className: 'work-diagram',
	eyebrow: 'Diagram',
}

export const WorkDiagram = ({
	weight = 0,
	align = 'left',
	width = 'wide',
	spacing = 'default',
	className,
	title,
	subtitle,
	children,
}: WorkDiagramProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		eyebrow={defaults.eyebrow}
		title={title}
		subtitle={subtitle}
	>
		<div className="w-full flex justify-center">{children}</div>
	</Section>
)

type WorkDiagramProps = WorkSectionPropsBase & {
	title: string
	subtitle?: string
	children: React.ReactNode
}
