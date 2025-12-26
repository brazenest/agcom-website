// components/zones/work/WorkChallenges.tsx
import { cn } from "@/lib/cn"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/section/Label"

const defaults = {
	className: 'work-challenges',
	title: 'Challenges',
}

export const WorkChallenges = ({
	weight = 0,
	align,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	items,
}: WorkChallengesProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		title={title}
		subtitle={subtitle}
	>
		<div className='space-y-6'>
			{items.map((c, i) => (
				<div key={i} className='space-y-2'>
					<Label text={c.title} />
					<p className='text-text-muted'>{c.body}</p>
				</div>
			))}
		</div>
	</Section>
)

type Challenge = {
	title: string
	body: string
}

type WorkChallengesProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	items: Challenge[]
}
