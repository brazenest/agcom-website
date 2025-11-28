// components/zones/work/WorkGallery.tsx
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { WorkSectionPropsBase } from "@/types/work";
import { cn } from "@/lib/utils";

const defaults = {
	className: 'work-gallery',
}

export function WorkGallery({
	align = 'center',
	width = 'wide',
	spacing = 'default',
	className,
	images,
	caption,
}: WorkGalleryProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
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
	);
}

export default WorkGallery

type WorkGalleryProps = WorkSectionPropsBase & {
	images: string[]
	caption?: string
}
