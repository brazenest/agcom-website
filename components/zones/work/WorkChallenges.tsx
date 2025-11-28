// components/zones/work/WorkChallenges.tsx

import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-challenges',
	title: 'Challenges',
}

export function WorkChallenges({
	align,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	items,
}: WorkChallengesProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className='space-y-8'>
				{items.map((c, i) => (
					<div key={i} className='space-y-2'>
						<h3 className='font-heading text-lg text-text'>{c.title}</h3>
						<p className='text-text-muted'>{c.body}</p>
					</div>
				))}
			</div>
		</Section>
	);
}

export default WorkChallenges

type Challenge = {
	title: string
	body: string
}

type WorkChallengesProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	items: Challenge[]
}
