import NextImage from 'next/image'
import { ImageModel } from "@/types/ui"

export const SectionHeading = ({ title, subtitle, thumbnail }: SectionHeadingProps) => {
	return (
		<header className="section-heading-wrap mb-10.5 grid md:grid-cols-5 gap-6">
			<div className="section-heading-textarea md:col-span-3">
				<h2 className="section-heading-title text-4xl lg:text-5xl lg:max-w-4xl font-heading font-medium leading-10.25 lg:leading-16.25 tracking-t2ight mb-5.25">{title}</h2>
				{subtitle && (
					<p className="section-heading-subtitle max-w-2xl lg:max-w-3xl text-lg font-light text-gray-600 dark:text-gray-400 tracking-wide lg:border-s border-gray-400/50 dark:border-gray-600/50 py-1.25 lg:py-1.75 lg:ps-5.5">{subtitle}</p>
				)}
			</div>
			{thumbnail && (
				<div className="section-heading-thumbnail-wrap md:col-span-2 flex justify-center">
					<NextImage
						src={thumbnail.src}
						alt={thumbnail.alt}
						width={thumbnail.width}
						height={thumbnail.height}
					/>
				</div>
			)}
		</header>
	)
}

type SectionHeadingProps = {
  title: string
  subtitle?: string
	thumbnail?: ImageModel
}
