// components/ui/Section.tsx

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionAlign } from "@/types/ui";
import { Eyebrow } from "./section/Eyebrow";
import { Title } from "./section/Title";
import { Subtitle } from "./section/Subtitle";

type SectionWidth = "default" | "wide" | "full";
type SectionSpacing = "tight" | "default" | "comfortable" | "spacious";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	align?: SectionAlign;
	eyebrow?: string;
	title?: string;
	subtitle?: string;
	width?: SectionWidth;
	spacing?: SectionSpacing;
	spacingTop?: SectionSpacing;
	spacingBottom?: SectionSpacing;
	visible?: boolean;
}

export function Section({
	align = "left",
	eyebrow,
	title,
	subtitle,
	width = "default",
	spacing = "default",
	spacingTop,
	spacingBottom,
	visible = true,
	className,
	children,
	...props
}: SectionProps) {
	if (!visible) return null;

	/* ---------------------------------------- */
	/* Alignment                                 */
	/* ---------------------------------------- */
	const alignment =
		align === "center"
			? "text-center items-center"
			: align === "responsive"
				? "text-center items-center md:text-left md:items-start"
				: "text-left items-start";

	/* ---------------------------------------- */
	/* Width classes                             */
	/* ---------------------------------------- */
	const widthClass =
		width === "full"
			? "layout-inner xl:layout-inner-full"
			: width === "wide"
				? "layout-inner xl:layout-inner-wide"
				: "layout-inner";

	/* ---------------------------------------- */
	/* Spacing system (clamp values)             */
	/* ---------------------------------------- */

	// Base spacing (used if no overrides)
	const spacingMap: Record<SectionSpacing, string> = {
		tight: "py-[clamp(2rem,4vw,3rem)]",
		default: "py-[clamp(3rem,6vw,5rem)]",
		comfortable: "py-[clamp(4rem,7vw,6rem)]",
		spacious: "py-[clamp(5rem,9vw,8rem)]"
	};

	// Optional top/bottom overrides
	const spacingTopMap: Record<SectionSpacing, string> = {
		tight: "pt-[clamp(2rem,4vw,3rem)]",
		default: "pt-[clamp(3rem,6vw,5rem)]",
		comfortable: "pt-[clamp(4rem,7vw,6rem)]",
		spacious: "pt-[clamp(5rem,9vw,8rem)]"
	};

	const spacingBottomMap: Record<SectionSpacing, string> = {
		tight: "pb-[clamp(2rem,4vw,3rem)]",
		default: "pb-[clamp(3rem,6vw,5rem)]",
		comfortable: "pb-[clamp(4rem,7vw,6rem)]",
		spacious: "pb-[clamp(5rem,9vw,8rem)]"
	};

	const spacingClass = cn(
		!spacingTop && !spacingBottom && spacingMap[spacing],
		spacingTop && spacingTopMap[spacingTop],
		spacingBottom && spacingBottomMap[spacingBottom]
	);

	/* ---------------------------------------- */

	return (
		<section className={cn("layout-section", spacingClass, className)} {...props}>
			<div className={cn(widthClass, "flex flex-col gap-8", alignment)}>
				<header className="max-w-2xl lg:max-w-3xl space-y-3">
					{eyebrow && <Eyebrow text={eyebrow} />}

					{title && <Title text={title} />}

					{subtitle && <Subtitle text={subtitle} />}
				</header>

				{children}
			</div>
		</section>
	);
}
