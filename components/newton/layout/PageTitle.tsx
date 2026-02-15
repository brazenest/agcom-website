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
		<span className={cn("page-title-wrap pb-1.25 block", className)}>
			<h1 className={cn('page-title mb-3.75 md:mb-5 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl text-4xl md:text-5xl leading-10.25 md:leading-13.5 font-heading font-medium text-shadow-md', alignClasses[align].title)}>{title}</h1>
			{subtitle && (
				<p className={cn('page-subtitle text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl text-gray-500 dark:text-gray-500 leading-6.25 md:leading-7', alignClasses[align].subtitle, subtitleClassName)}>{subtitle}</p>
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
