// components/zones/work/WorkAbstract.tsx
import { cn } from '@/lib/cn'
import type { WorkSectionPropsBase } from '@/types/work'
import { Section } from '@/components/ui/Section'

const defaults = {
	className: 'work-abstract',
	title: 'Abstract',
}

export const WorkAbstract = ({
	weight = 1,
	align,
	width,
	spacing = 'default',
	className,
	title,
	subtitle,
	content,
	children,
}: WorkAbstractProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		title={title}
		subtitle={subtitle}
	>
		<div className="max-w-3xl space-y-4 md:space-y-6 md:text-center mx-auto">
			{children ? children : content}
		</div>
	</Section>
)

type WorkAbstractProps = WorkSectionPropsBase & {
	content?: React.ReactNode
	children?: React.ReactNode
}
