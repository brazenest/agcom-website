// components/work/WorkDiagram.tsx
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-diagram',
	eyebrow: 'Diagram',
}

export const WorkDiagram = ({
	align = 'left',
	width = 'wide',
	spacing = 'default',
	className,
	title,
	subtitle,
	children,
}: WorkDiagramProps) => (
	<Section
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
);

type WorkDiagramProps = WorkSectionPropsBase & {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
}
