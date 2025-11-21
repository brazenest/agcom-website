// components/ui/Section.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type SectionWidth = "default" | "wide" | "full";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	align?: "left" | "center";
	eyebrow?: string;
	title: string;
	subtitle?: string;
	width?: SectionWidth;
}

export function Section({
	align = "left",
	eyebrow,
	title,
	subtitle,
	width = "default",
	className,
	children,
	...props
}: SectionProps) {
	const alignment =
		align === "center"
			? "text-center items-center"
			: "text-left items-start";

	const widthClass =
		width === "full"
			// mobile: contained; xl+: full-width
			? "layout-inner xl:layout-inner-full"
			: width === "wide"
				// mobile: contained; xl+: wider but still capped
				? "layout-inner xl:layout-inner-wide"
				// default: contained at all sizes
				: "layout-inner";

	return (
		<section
			className={cn("layout-section", className)}
			{...props}
		>
			<div className={cn(widthClass, "flex flex-col gap-8", alignment)}>
				<header className="max-w-3xl space-y-3">
					{eyebrow && (
						<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
							{eyebrow}
						</p>
					)}
					<h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text">
						{title}
					</h1>
					{subtitle && (
						<p className="text-base md:text-lg text-text-muted">
							{subtitle}
						</p>
					)}
				</header>

				{children}
			</div>
		</section>
	);
}

