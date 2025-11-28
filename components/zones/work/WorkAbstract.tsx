// components/zones/work/WorkAbstract.tsx

import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'
import { WorkSectionPropsBase } from '@/types/work'

const defaults = {
	className: '',
	title: 'Abstract',
}

export function WorkAbstract({
	align,
	width,
	spacing = 'comfortable',
	className,
	title,
	subtitle,
	children,
}: WorkAbstractProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className="max-w-3xl space-y-4 text-base text-text-muted">
				{children}
			</div>
		</Section>
	)
}

export default WorkAbstract

type WorkAbstractProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	children: React.ReactNode
}
