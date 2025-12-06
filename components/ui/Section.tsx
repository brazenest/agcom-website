// components/ui/Section.tsx
import { cn } from '@/lib/utils'
import { SectionAlign, SectionWidth } from '@/types/ui'
import { Eyebrow } from './section/Eyebrow'
import { Title } from './section/Title'
import { Subtitle } from './section/Subtitle'
import { getSectionAlign, getSectionWidth } from '@/lib/constants'
import { SectionSpacingName, SectionSpacingSet, SectionTheme, SectionThemeWeightName } from '@/types/section'
import sectionData from '@/data/section.json' assert { type: 'json' }

const theme: SectionTheme = sectionData.themes.default
const spacings: SectionSpacingSet = theme.spacings

export const Section = ({
	weight = 0,
	align = 'left',
	width = 'default',
	spacing = 'default',
	spacingTop,
	spacingBottom,
	eyebrow,
	title,
	subtitle,
	className,
	children,
}: SectionProps) => {

	const variantClass = cn(`section-variant-default-weight-${weight}`, theme.variants.default.weights[weight])
	const alignClass = getSectionAlign(align)
	const widthClass = getSectionWidth(width)
	const spacingClass = cn(
		!spacingTop && !spacingBottom && spacings[spacing].default,
		spacingTop && spacings[spacing].top,
		spacingBottom && spacings[spacing].bottom,
	);

	return (
		<section className={cn(sectionData.classNameBase, variantClass, spacingClass, className)}>
			<div className={cn(widthClass, "flex flex-col gap-8 sm:gap-10", alignClass)}>
				{(title || subtitle) && (
					<header className="max-w-2xl lg:max-w-3xl">
						{eyebrow && <Eyebrow text={eyebrow} className="mb-6 lg:mb-12" />}

						{title && <Title text={title} className="mt-5 mb-6 lg:my-7" />}

						{subtitle && <Subtitle text={subtitle} />}
					</header>
				)}
				{children}
			</div>
		</section>
	);
}




type SectionProps = {
	weight?: SectionThemeWeightName
	align?: SectionAlign
	width?: SectionWidth
	spacing?: SectionSpacingName
	spacingTop?: SectionSpacingName
	spacingBottom?: SectionSpacingName
	eyebrow?: string
	title?: string
	subtitle?: string
	className?: string
	children?: React.ReactNode
}
