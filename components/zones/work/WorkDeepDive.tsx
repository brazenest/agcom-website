// components/zones/work/WorkDeepDive.tsx

import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-deep-dive',
	eyebrow: 'Deep Dive',
}

export function WorkDeepDive({
	align,
	width,
	spacing = 'default',
	className,
	eyebrow = defaults.eyebrow,
	title,
	subtitle,
	children
}: WorkDeepDiveProps) {

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
			<div className="layout-prose space-y-6 text-text-muted">
				{children}
			</div>
		</Section>
	);
}

export default WorkDeepDive

type WorkDeepDiveProps = WorkSectionPropsBase & {
	eyebrow?: string
	title: string
	subtitle?: string
	children: React.ReactNode
}
