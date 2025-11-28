import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-interactions',
	title: 'Key Interactions',
}

export function WorkInteractions({
	align ,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	items,
}: WorkInteractionsProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className='space-y-6'>
				{items.map((it, i) => (
					<div key={i} className='space-y-2'>
						<h4 className='font-heading text-base text-text'>{it.title}</h4>
						<p className='text-sm text-text-muted'>{it.body}</p>
					</div>
				))}
			</div>
		</Section>
	);
}

export default WorkInteractions

type InteractionItem = {
	title: string
	body: string
}

type WorkInteractionsProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	items: InteractionItem[]
}
