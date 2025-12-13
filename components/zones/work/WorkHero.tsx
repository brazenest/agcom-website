// components/zones/work/WorkHero.tsx
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { CroppedImage } from "@/components/ui/CroppedImage"
import { SectionImage } from "@/types/ui"

const defaults = {
	className: 'work-hero relative',
	headerClassName: 'max-w-4xl px-6 lg:px-0 space-y-7',
}

export const WorkHero = ({
	weight = 0,
	align = 'center',
	width = 'full',
	spacing = 'default',
	className,
	eyebrow,
	title,
	subtitle,
	image,
	tags = [],
}: WorkHeroProps) => {

	const headerClassName = cn(defaults.headerClassName, (align === 'center') && 'mx-auto text-center')

	return (
		<Section
			weight={weight}
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
		>
			<div className="layout-inner-xl flex flex-col gap-6">

				{/* HEADER CONTENT */}
				<header className={headerClassName}>
					<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
						{eyebrow}
					</p>

					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold !leading-tight">
						{title}
					</h1>

					{subtitle && (
						<p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
							{subtitle}
						</p>
					)}

					{tags.length > 0 && (
						<div className="flex flex-wrap gap-2 pt-1">
							{tags.map((tag) => (
								<span
									key={tag}
									className="text-xs px-2.5 py-1 rounded-full bg-surface/70 border border-border/40 text-text-muted"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</header>

				{/* HERO IMAGE */}
				{image && (
					<div className="relative w-full overflow-hidden rounded-lg bg-card-bg shadow-lg">
						<CroppedImage
							src={image.src}
							alt={image.alt}
							width={2400}
							horizontal={18}
							vertical={9}
							imgClassName="w-full h-auto"
						/>
					</div>
				)}
				
			</div>
		</Section>
	)
}

type WorkHeroProps = WorkSectionPropsBase & {
	image?: SectionImage
	tags?: string[]
}
