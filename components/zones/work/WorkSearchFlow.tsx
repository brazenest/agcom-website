// components/zones/work/WorkSearchFlow.tsx
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { Label } from "@/components/ui/section/Label"

const defaults = {
	className: 'work-search-flow',
	eyebrow: 'Flow',
	title: 'Search flow',
}

export const WorkSearchFlow = ({
	weight = 0,
	align = 'left',
	width = 'wide',
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	steps,
}: WorkSearchFlowProps) => (
	<Section
		weight={weight}
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
						<Label text={step.label} />
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
					<p className="text-sm md:text-base text-text-muted my-0">
						{step.body}
					</p>
				</div>
			))}
		</div>
	</Section>
)

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

export default WorkSearchFlow
