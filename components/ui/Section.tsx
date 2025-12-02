// components/ui/Section.tsx

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionAlign, SectionSpacing, SectionWidth } from "@/types/ui";
import { Eyebrow } from "./section/Eyebrow";
import { Title } from "./section/Title";
import { Subtitle } from "./section/Subtitle";
import { getSectionAlign, getSectionWidth } from "@/lib/constants";
import { SectionColorWeight } from "@/types/section";

const defaults = {
	className: 'section layout-section',
	variantStyles: {
		0: "bg-white text-black dark:bg-zinc-950 dark:text-zinc-50",
		1: "bg-zinc-100 text-gray-900 dark:bg-zinc-900 dark:text-zinc-100",
		2: "bg-zinc-200 text-gray-900 dark:bg-zinc-800 dark:text-zinc-100",
		3: "bg-zinc-300 text-gray-900 dark:bg-zinc-700 dark:text-zinc-100",
		4: "bg-zinc-400 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
	},
	spacing: {
		tight: {
			default: 'py-[clamp(1rem,3vw,4rem)]',
			top: 'pt-[clamp(1rem,3vw,4rem)]',
			bottom: 'pb-[clamp(1rem,3vw,4rem)]',
		},
		default: {
			default: 'py-[clamp(2rem,5vw,7rem)]',
			top: 'pt-[clamp(2rem,5vw,7rem)]',
			bottom: 'pb-[clamp(2rem,5vw,7rem)]',
		},
		comfortable: {
			default: 'py-[clamp(3rem,9vw,11rem)]',
			top: 'pt-[clamp(3rem,9vw,11rem)]',
			bottom: 'pb-[clamp(3rem,9vw,11rem)]',
		},
		spacious: {
			default: 'py-[clamp(4rem,12vw,14rem)]',
			top: 'pt-[clamp(4rem,12vw,14rem)]',
			bottom: 'pb-[clamp(4rem,12vw,14rem)]',
		},
	}
}

export const Section = ({
	weight = 0,
	align = "left",
	width = "default",
	spacing = "default",
	spacingTop,
	spacingBottom,
	eyebrow,
	title,
	subtitle,
	className,
	children,
}: SectionProps) => {

	const variantClass = defaults.variantStyles[weight] || ''
	const alignClass = getSectionAlign(align)
	const widthClass = getSectionWidth(width)
	const spacingClass = cn(
		!spacingTop && !spacingBottom && defaults.spacing[spacing].default,
		spacingTop && defaults.spacing[spacing].top,
		spacingBottom && defaults.spacing[spacing].bottom,
	);

	return (
		<section className={cn(defaults.className, variantClass, spacingClass, className)}>
			<div className={cn(widthClass, "flex flex-col gap-10", alignClass)}>
				{(title || subtitle) && (
					<header className="max-w-2xl lg:max-w-3xl space-y-4">
						{eyebrow && <Eyebrow text={eyebrow} />}

						{title && <Title text={title} />}

						{subtitle && <Subtitle text={subtitle} />}
					</header>
				)}
				{children}
			</div>
		</section>
	);
}

type SectionProps = {
	weight?: SectionColorWeight
	align?: SectionAlign
	width?: SectionWidth
	spacing?: SectionSpacing
	spacingTop?: SectionSpacing
	spacingBottom?: SectionSpacing
	eyebrow?: string
	title?: string
	subtitle?: string
	className?: string
	children?: React.ReactNode
}

export default Section
