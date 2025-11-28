import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-performance',
	title: 'Performance',
}

export function WorkPerformance({
	align,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	children,
}: WorkPerformanceProps) {


	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className='layout-prose space-y-6 text-text-muted'>
				{children}
			</div>
		</Section>
	);
}

export default WorkPerformance


type WorkPerformanceProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	children?: React.ReactNode
}