import NextImage from 'next/image'
import { cn } from "@/lib/cn"
import { ImageModel } from "@/types/content"
import { SectionWidth, SectionWidthClassMap } from "@/types/layout"

export const Section = ({ width = 'default', id, backgroundImage, className, children }: SectionProps) => {

	const widthClasses: SectionWidthClassMap = {
		default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
		full: "w-full px-4 sm:px-6 lg:px-8",
	}
	const spacingClasses = "py-8 sm:py-12 md:py-20 lg:py-32"
	const borderClasses = "border-y2 border-gray-100 dark:border-gray-900"

	return (
		<section id={id} className={cn(widthClasses[width], spacingClasses, borderClasses, className)}>
			{backgroundImage && (
				<div className="absolute inset-0 h-full w-full object-cover">
					<NextImage
						src={backgroundImage.src}
						alt={backgroundImage.alt}
						width={backgroundImage.width}
						height={backgroundImage.height}
						className="w-full h-full object-cover"
					/>
				</div>
			)}
			{children}
		</section>
	)
}

type SectionProps = {
  width?: SectionWidth
  id: string
  backgroundImage?: ImageModel
  className?: string
  children: React.ReactNode
}
