// components/zones/work/WorkIndexGrid.tsx
import type { WorkIndexItem } from "@/types/work"
import { Section } from "@/components/ui/Section"
import { WorkIndexCard } from "./WorkIndexCard"

export const WorkIndexGrid = ({ className, workItems }: WorkIndexGridProps) => (
	<Section
		align='left'
		width='wide'
		spacing='comfortable'
		className={className}
	>
		<div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'>

			{workItems.map(({
				eyebrow,
				title,
				subtitle,
				href,
				imageSrc,
				tags,
			}, i) => (
				<WorkIndexCard
					key={i}
					eyebrow={eyebrow}
					title={title}
					subtitle={subtitle}
					href={href}
					imageSrc={imageSrc}
					tags={tags}
				/>
			))}

		</div>
	</Section>
)

type WorkIndexGridProps = {
	className?: string,
	workItems: WorkIndexItem[],
}

export default WorkIndexGrid
