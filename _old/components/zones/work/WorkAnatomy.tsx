// components/zones/work/WorkAnatomy.tsx
import { cn } from "@/lib/cn"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { CroppedImage } from "@/components/ui/CroppedImage"
import { AnatomyImageCalloutList } from "@/components/ui/work/AnatomyImageCalloutList"

const defaults = {
	className: 'work-anatomy',
	eyebrow: 'Anatomy',
}

export const WorkAnatomy = ({
	variant = 'side',
	weight = 3,
	align,
	width,
	spacing = 'default',
	className,
	eyebrow = defaults.eyebrow,
	title,
	subtitle,
	imageSrc,
	imageAlt = "",
	imageCallouts,
	children,
}: WorkAnatomyProps) => {

	const hasCallouts = imageCallouts?.length;

	return (
		<Section
			weight={weight}
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			eyebrow={eyebrow}
			title={title}
			subtitle={subtitle}
		>
			<div
				className={
					variant === 'side'
						? 'grid gap-10 md:grid-cols-[1.3fr_1fr]'
						: 'grid gap-10'
				}
			>
				<div className='relative w-full rounded-lg overflow-hidden border border-border'>

					{/* Image */}
					<CroppedImage
						src={imageSrc}
						alt={imageAlt}
						width={1024}
						horizontal={6}
						vertical={5}
					/>

					{/* Callout markers */}
					{hasCallouts && (
						<div className='absolute inset-0 pointer-events-none'>
							{imageCallouts.map(c => (
								<div
									key={c.number}
									className='absolute flex items-center justify-center h-6 w-6 rounded-full bg-accent text-bg text-xs font-semibold shadow-md'
									style={{ top: `${c.y}%`, left: `${c.x}%` }}
								>
									{c.number}
								</div>
							))}
						</div>
					)}
				</div>

				{/* Content or Callouts */}
				{hasCallouts
					? <AnatomyImageCalloutList callouts={imageCallouts} />
					: (
						<div className='layout-prose space-y-6 text-text-muted'>
							{children}
						</div>
					)}

			</div>
		</Section>
	)
}

type AnatomyImageCallout = {
	number: number
	label: string
	body: string
	x: number
	y: number
}

type WorkAnatomyProps = WorkSectionPropsBase & {
	variant?: "side" | "stacked"
	eyebrow?: string
	title: string
	subtitle?: string
	imageSrc: string
	imageAlt?: string
	imageCallouts?: AnatomyImageCallout[]
	children?: React.ReactNode
}
