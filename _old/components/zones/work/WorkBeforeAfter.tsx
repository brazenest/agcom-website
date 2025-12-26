// components/zones/work/WorkBeforeAfter.tsx
import Image from "next/image"
import { cn } from "@/lib/cn"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/section/Label"

const defaults = {
	className: 'work-beforeandafter',
	title: 'Before & After',
}

export const WorkBeforeAfter = ({
	weight = 2,
	align,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	before,
	after,
}: WorkBeforeAfterProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		title={title}
		subtitle={subtitle}
	>
		<div className='grid gap-10 md:grid-cols-2'>
			<div className='space-y-3'>
				<Label text='Before' />
				{before.src && (
					<Image
						src={before.src!}
						alt='Before redesign'
						width={1200}
						height={800}
						className='rounded-lg border border-border'
					/>
				)}
				{before.body && (
					<p className='text-sm text-muted-foreground'>{before.body}</p>
				)}
			</div>

			<div className='space-y-3'>
				<Label text='After' />
				{after.src && (
					<Image
						src={after.src!}
						alt='After redesign'
						width={1200}
						height={800}
						className='rounded-lg border border-border'
					/>
				)}
				{after.body && (
					<p className='text-sm text-muted-foreground'>{after.body}</p>
				)}
			</div>
		</div>
	</Section>
)

type BeforeAfterSide = {
	src?: string
	body?: string
}

type WorkBeforeAfterProps = WorkSectionPropsBase & {
	before: BeforeAfterSide
	after: BeforeAfterSide
}
