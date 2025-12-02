// components/ui/CroppedImage.tsx
import Image from 'next/image'
import { cn } from '@/lib/utils'

const defaults = {
	className: 'relative w-full overflow-hidden rounded-3xl',
	imgClassName: 'object-cover',
}

export const CroppedImage = ({ src, alt, width, horizontal, vertical, className, imgClassName }: CroppedImageProps) => {

	const aspectClassName = `aspect-[${horizontal}/${vertical}]`

	return (
		<div className={cn(defaults.className, aspectClassName, className)}>
			<Image
				src={src}
				alt={alt}
				width={width ? width : undefined}
				height={width ? width * vertical / horizontal : undefined}
				fill={!width}
				className={cn(defaults.imgClassName, imgClassName)}
				priority
			/>
		</div>
	)
}

type CroppedImageProps = {
  src: string
  alt: string
  width?: number
  horizontal: number
  vertical: number
  className?: string
  imgClassName?: string
}

export default CroppedImage
