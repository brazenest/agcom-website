// components/zones/work/WorkProblemApproachOutcome.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/section/Label"

const defaults = {
	className: 'work-pao',
	eyebrow: 'Problem → Approach → Outcome',
	title: 'Problem, Approach, Outcome',
	subtitle: 'A brief overview of how we tackled challenges and delivered results through a structured process.',
}

export const WorkProblemApproachOutcome	= ({
	weight = 0,
	align,
	width,
	spacing = 'default',
	className,
	eyebrow = defaults.eyebrow,
	title = defaults.title,
	subtitle = defaults.subtitle,
	problem,
	approach,
	outcome,
}: WorkPAOProps) => {

	const items = [
		{ title: 'Problem', content: problem.content },
		{ title: 'Approach', content: approach.content },
		{ title: 'Outcome', content: outcome.content },
	]

	return (
		<Section
			weight={weight}
			width={width}
			spacing={spacing}
			align={align}
			className={cn(defaults.className, className)}
			eyebrow={eyebrow}
			title={title}
			subtitle={subtitle}
		>
			<WorkPAOItemGrid items={items} />
		</Section>
	);
}

const WorkPAOItem = ({ title, content }) => (
	<div className="space-y-4">
		<Label text={title} />
		<p className="text-text-muted">{content}</p>
	</div>
)

const WorkPAOItemGrid = ({ items }) => (
	<div className="grid gap-10 md:grid-cols-3">
		{items.map((item, i) => (
			<WorkPAOItem
				key={i}
				title={item.title}
				content={item.content}
			/>
		))}
	</div>
)

type WorkPAOItemData = {
	content: string
}

type WorkPAOProps = WorkSectionPropsBase & {
	eyebrow?: string
	title?: string
	subtitle?: string
	problem: WorkPAOItemData
	approach: WorkPAOItemData
	outcome: WorkPAOItemData
}

export default WorkProblemApproachOutcome
