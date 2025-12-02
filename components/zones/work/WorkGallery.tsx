// components/zones/work/WorkGallery.tsx
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { WorkSectionPropsBase } from "@/types/work"
import { Section } from "@/components/ui/Section"

const defaults = {
	className: 'work-gallery',
}

export const WorkGallery = ({
	weight = 0,
	align = 'center',
	width = 'wide',
	spacing = 'default',
	className,
	eyebrow,
	title,
	subtitle,
	images,
	caption,
}: WorkGalleryProps) => (
	<Section
		weight={weight}
		align={align}
		width={width}
		spacing={spacing}
		className={cn(defaults.className, className)}
		eyebrow={eyebrow}
		title={title}
		subtitle={subtitle}
	>
		<div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
			{images.map((src, i) => (
				<div key={i} className='relative w-full rounded-lg overflow-hidden'>
					<Image
						src={src}
						alt=''
						width={1600}
						height={1000}
						className='w-full h-auto object-cover'
					/>
				</div>
			))}
		</div>

		{caption && (
			<p className='mt-4 text-sm text-text-muted text-center max-w-2xl mx-auto'>
				{caption}
			</p>
		)}
	</Section>
)

type WorkGalleryProps = WorkSectionPropsBase & {
	images: string[]
	caption?: string
}

export default WorkGallery
