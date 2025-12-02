// components/zones/work/WorkInteractions.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { Column } from "@/components/ui/section/Column"
import { ColumnGrid } from "@/components/ui/section/ColumnGrid"
import { Label } from "@/components/ui/section/Label"

const defaults = {
	className: 'work-interactions',
	title: 'Key Interactions',
}

export const WorkInteractions = ({
	weight = 0,
	align,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	items,
}: WorkInteractionsProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		title={title}
		subtitle={subtitle}
	>
		<ColumnGrid numAcross={{ base: 1, md: 2 }}>
			{items.map((it, i) => (
				<Column key={i}>
					<Label text={it.title} />
					<p className='text-sm text-text-muted'>{it.body}</p>
				</Column>
			))}
		</ColumnGrid>
	</Section>
)

type InteractionItem = {
	title: string
	body: string
}

type WorkInteractionsProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	items: InteractionItem[]
}

export default WorkInteractions
