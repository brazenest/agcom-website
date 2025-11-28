import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-search-flow',
	eyebrow: 'Flow',
	title: 'Search flow',
}

export function WorkSearchFlow({
	align = 'left',
	width = 'wide',
	spacing = 'comfortable',
	className,
	title = defaults.title,
	subtitle,
	steps,
}: WorkSearchFlowProps) {
	return (
		<Section
			eyebrow={defaults.eyebrow}
			title={title}
			subtitle={subtitle}
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
		>
			<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
				{steps.map((step, i) => (
					<div key={i} className="flex flex-col gap-3">
						{/* Step Label */}
						{step.label && (
							<p className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-text-muted">
								{step.label}
							</p>
						)}

						{/* Step Image */}
						{step.image && (
							<div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-border bg-card-bg">
								<Image
									src={step.image}
									alt={step.imageAlt ?? step.label ?? `Step ${i + 1}`}
									fill
									className="object-cover"
								/>
							</div>
						)}

						{/* Step Title */}
						{step.title && (
							<h3 className="font-heading text-base md:text-lg text-text">
								{step.title}
							</h3>
						)}

						{/* Step Body */}
						<p className="text-sm md:text-base text-text-muted leading-relaxed">
							{step.body}
						</p>
					</div>
				))}
			</div>
		</Section>
	);
}

export default WorkSearchFlow

type FlowStep = {
	label?: string
	title?: string
	body: string
	image?: string
	imageAlt?: string
}

type WorkSearchFlowProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	steps: FlowStep[]
}
