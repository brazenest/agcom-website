import { cn } from "@/lib/cn"
import { PageTitleAlign, PageTitleAlignClassMap } from "@/types/layout"

export const PageTitle = ({ align = 'center', title, subtitle, subtitleClassName, className }: PageTitleProps) => {
	
	const alignClasses: PageTitleAlignClassMap = {
		center: {
			title: 'mx-auto text-center',
			subtitle: 'mx-auto text-center',
		},
		left: {
			title: 'text-left',
			subtitle: 'text-left',
		},
	}
	return (
		<span className={cn("page-title-wrap pb-3 block", className)}>
			<h1 className={cn('page-title max-w-3xl lg:max-w-5xl text-4xl md:text-5xl lg:text-6xl md:leading-13.75 font-heading font-semibold text-shadow-md lg:leading-18.25', alignClasses[align].title)}>{title}</h1>
			{subtitle && (
				<p className={cn('page-subtitle lg:max-w-4xl text-lg sm:text-2xl md:max-w-3xl text-gray-500 dark:text-gray-500 mt-5.25 md:leading-7.5', alignClasses[align].subtitle, subtitleClassName)}>{subtitle}</p>
			)}
		</span>
	)
}

type PageTitleProps = {
	align?: PageTitleAlign
  title: string
  subtitle?: string
	subtitleClassName?: string
	className?: string
}
