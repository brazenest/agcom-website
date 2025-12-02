// components/zones/work/WorkMeta.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { ColumnGrid } from "@/components/ui/section/ColumnGrid"
import { Column } from "@/components/ui/section/Column"
import { Pill } from "@/components/ui/Pill"

const defaults = {
	className: 'work-meta',
	title: 'At a glance',
}

export const WorkMeta = ({
	weight = 0,
	align,
	width,
	spacing = 'default',
	className,
	subtitle,
	columns,
}: WorkMetaProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		title={defaults.title}
		subtitle={subtitle}
	>
		<ColumnGrid numAcross={{ base: 1, md: 2, lg: 3 }}>
			
			{columns.map((col, i) => (

				<Column label={col.label} key={i}>
					{Array.isArray(col.value)
						? col.usePills
							? (
								<div className='flex flex-wrap gap-2'>
									{col.value.map(v => (
										<Pill key={v} size='sm' variant='subtle'>
											{v}
										</Pill>
									))}
								</div>
							)
							: (
								<ul className='space-y-1 text-sm text-text-muted'>
									{col.value.map(v => (
										<li key={v}>{v}</li>
									))}
								</ul>
							)
						: (
							<p className='text-sm text-text-muted'>
								{col.value}
							</p>
						)}
				</Column>
			))}

		</ColumnGrid>

	</Section>
)

type MetaColumn = {
	label: string
	value: string | string[]
	usePills?: boolean
}

type WorkMetaProps = WorkSectionPropsBase & {
	subtitle: string
	columns: MetaColumn[]
}

export default WorkMeta
