// components/zones/work/WorkAnatomy.tsx
"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-anatomy',
	eyebrow: 'Anatomy',
}

export function WorkAnatomy({
	align,
	width,
	spacing = 'comfortable',
	variant = 'side',
	className,
	eyebrow = defaults.eyebrow,
	title,
	subtitle,
	image,
	imageAlt = "",
	imageCallouts,
	children,
}: WorkAnatomyProps) {

	const hasCallouts = imageCallouts?.length;

	return (
		<Section
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
						? 'grid gap-10 md:grid-cols-[1.3fr,1fr]'
						: 'grid gap-10'
				}
			>
				<div className='relative w-full rounded-lg overflow-hidden border border-border bg-card-bg'>
					<Image
						src={image}
						alt={imageAlt}
						width={1600}
						height={1000}
						className='w-full h-auto object-cover'
					/>

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

				<div className='space-y-6'>
					{hasCallouts
						? imageCallouts.map(c => (
							<div key={c.number} className='space-y-1'>
								<h4 className='font-heading text-base text-text flex items-center gap-2'>
									<span className='inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent text-bg text-xs font-medium'>
										{c.number}
									</span>
									{c.label}
								</h4>
								<p className='text-sm text-text-muted'>{c.body}</p>
							</div>
						))
						: (
							<div className='layout-prose space-y-6 text-text-muted'>
								{children}
							</div>
						)}
				</div>
			</div>
		</Section>
	);
}

export default WorkAnatomy

type AnatomyCallout = {
	number: number
	label: string
	body: string
	x: number
	y: number
}

type WorkAnatomyProps = WorkSectionPropsBase & {
	eyebrow?: string
	title: string
	subtitle?: string
	variant?: "side" | "stacked"
	image: string
	imageAlt?: string
	imageCallouts?: AnatomyCallout[]
	children?: React.ReactNode
}
