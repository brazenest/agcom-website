// components/zones/work/WorkBody.tsx

import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-body',
}

export function WorkBody({
	align = 'left',
	width = 'default',
	spacing = 'default',
	className,
	eyebrow,
	title,
	subtitle,
	children
}: WorkBodyProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			eyebrow={eyebrow}
			title={title}
			subtitle={subtitle}
		>
			<div className="space-y-6 text-text-muted w-full border-e border-s py-20">
				<div className="layout-prose text-lg">
					{children}
				</div>
			</div>
		</Section>
	);
}

export default WorkBody

type WorkBodyProps = WorkSectionPropsBase & {
	eyebrow?: string
	title?: string
	subtitle?: string
	children: React.ReactNode
}
