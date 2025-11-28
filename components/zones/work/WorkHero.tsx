"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'relative'
}

export function WorkHero({
	align = 'center',
	width = 'full',
	spacing = 'spacious',
	className,
	eyebrow,
	title,
	subtitle,
	imageSrc,
	imageAlt = "",
	variant = "hybrid",
	tags = [],
}: WorkHeroProps) {

	/** Variant → color bias */
	const glowClass =
		variant === "engineering"
			? "bg-accent/20"           // blue glow
			: variant === "cinematic"
				? "bg-accent-subtle/30"    // amber glow
				: "bg-accent/18";             // hybrid balanced glow

	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
		>
			<div className="layout-inner-xl flex flex-col gap-10 md:gap-14">

				{/* HEADER CONTENT */}
				<header className="max-w-4xl text-center space-y-4">
					<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
						{eyebrow}
					</p>

					<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text">
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
				<div className="relative w-full overflow-hidden rounded-lg border border-border bg-card-bg shadow-lg">
					<Image
						src={imageSrc}
						alt={imageAlt}
						width={2400}
						height={1350}
						className="w-full h-auto object-cover"
						priority
					/>
				</div>
			</div>

			{/* AMBIENT BACKGROUND WASH */}
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.75]">
				<div className={cn(
					"absolute -top-32 left-[-10%] h-[26rem] w-[26rem] rounded-full blur-3xl",
					glowClass
				)} />

				<div className={cn(
					"absolute bottom-[-20%] right-[-5%] h-[28rem] w-[28rem] rounded-full blur-3xl",
					glowClass
				)} />
			</div>
		</Section>
	);
}

export default WorkHero

type WorkHeroVariant = "engineering" | "cinematic" | "hybrid"

type WorkHeroProps = WorkSectionPropsBase & {
	eyebrow: string
	title: string
	subtitle?: string
	imageSrc: string
	imageAlt?: string
	variant?: WorkHeroVariant
	tags?: string[]
}
