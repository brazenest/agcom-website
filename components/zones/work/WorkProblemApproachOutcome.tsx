// components/zones/work/WorkProblemApproachOutcome.tsx
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-pao',
	eyebrow: 'Problem → Approach → Outcome',
	title: 'Problem, Approach, Outcome',
	subtitle: 'A brief overview of how we tackled challenges and delivered results through a structured process.',
}

export function WorkProblemApproachOutcome({
	align,
	width,
	spacing = 'comfortable',
	className,
	eyebrow = defaults.eyebrow,
	title = defaults.title,
	subtitle = defaults.subtitle,
	sections,
}: WorkPAOProps) {
	return (
		<Section
			width={width}
			spacing={spacing}
			align={align}
			className={cn(defaults.className, className)}
			eyebrow={eyebrow}
			title={title}
			subtitle={subtitle}
		>
			<div className="grid gap-10 md:grid-cols-3">
				{sections.map((s, i) => (
					<div key={i} className="space-y-4">
						<h3 className="font-heading text-lg text-text">
							{s.title}
						</h3>
						<p className="text-text-muted">{s.body}</p>
					</div>
				))}
			</div>
		</Section>
	);
}

export default WorkProblemApproachOutcome

type PAOItem = {
	title: string
	body: string
}

type WorkPAOProps = WorkSectionPropsBase & {
	sections: PAOItem[]
	eyebrow?: string
	title?: string
	subtitle?: string
}