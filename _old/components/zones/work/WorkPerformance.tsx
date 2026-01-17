// components/zones/work/WorkPerformance.tsx
import { cn } from '@/lib/cn'
import type { WorkSectionPropsBase } from '@/types/work'
import { Section } from '@/components/ui/Section'

const defaults = {
	className: 'work-performance',
	title: 'Performance Metrics',
}

export const WorkPerformance = ({
	weight = 3,
	align = 'left',
	width = 'default',
	spacing = 'default',
	className,
	eyebrow,
	title = defaults.title,
	metrics = [],
	body,
	children,
}: WorkPerformanceProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		eyebrow={eyebrow}
		title={title}
	>
		{/* --- Metrics Block --- */}
		<MetricsBlock metrics={metrics} />

		{(body || children) && (
			<div className="layout-prose mt-6 md:mt-8">
				{children ? children : body}
			</div>
		)}
	</Section>
)

/* -------------------------------------- */
/*  METRICS BLOCK — CSS TRANSITION ONLY   */
/* -------------------------------------- */

const MetricsBlock = ({
	metrics
}: MetricsBlockProps) => {

	if (!metrics || metrics.length === 0) return null

	return (
		<div
			className={cn(
				'grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8',
			)}
		>
			{metrics.map((metric, index) => (
				<div
					key={index}
					className="md:text-center md:text-left"
				>
					{/* Value */}
					<div className="font-cinematic text-3xl md:text-4xl font-bold tracking-tight transition-opacity duration-700">
						{metric.value}
					</div>

					{/* Label */}
					<div className="mt-3 text-xs md:text-sm uppercase tracking-[0.18em] text-[var(--color-text-soft)] font-engineering transition-opacity duration-700 delay-150">
						{metric.label}
					</div>

					{/* Secondary Label */}
					{metric.secondaryLabel && (
						<div className="mt-1 text-[0.78rem] md:text-xs opacity-70 text-[var(--color-text-soft)] transition-opacity duration-700 delay-200">
							{metric.secondaryLabel}
						</div>
					)}
				</div>
			))}
		</div>
	)
}

type WorkPerformanceMetric = {
	value: number | string
	label: string
	secondaryLabel?: string
}

type MetricsBlockProps = {
	metrics?: WorkPerformanceMetric[]
}

type WorkPerformanceProps = WorkSectionPropsBase & {
	metrics?: WorkPerformanceMetric[]
	body?: React.ReactNode
	children?: React.ReactNode
}
