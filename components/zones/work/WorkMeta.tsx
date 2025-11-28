import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-meta',
	title: 'At a glance',
}

export function WorkMeta({
	align,
	width,
	spacing = 'comfortable',
	className,
	subtitle,
	columns,
}: WorkMetaProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={defaults.title}
			subtitle={subtitle}
		>
			<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
				{columns.map((col, i) => (
					<div key={i} className='space-y-2'>
						<p className='text-xs font-semibold tracking-wide uppercase text-text-muted'>
							{col.label}
						</p>

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
					</div>
				))}
			</div>
		</Section>
	);
}

export default WorkMeta

type MetaColumn = {
	label: string
	value: string | string[]
	usePills?: boolean
};

type WorkMetaProps = WorkSectionPropsBase & {
	subtitle: string
	columns: MetaColumn[]
}
