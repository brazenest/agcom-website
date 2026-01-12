import { cn } from "@/lib/cn"
import { PageTitleAlign, PageTitleAlignClassMap } from "@/types/layout"

export const PageTitle = ({ align = 'center', title, subtitle }: PageTitleProps) => {
	
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
		<span className="page-title-wrap pb-3 block">
			<h1 className={cn('page-title max-w-5xl text-5xl leading-12.75 font-heading font-semibold tracking-tight sm:leading-16.75', alignClasses[align].title)}>{title}</h1>
			{subtitle && (
				<p className={cn('page-subtitle max-w-4xl text-lg sm:text-2xl text-gray-500 dark:text-slate-400 mt-8.25 leading-6.25', alignClasses[align].subtitle)}>{subtitle}</p>
			)}
		</span>
	)
}

type PageTitleProps = {
	align?: PageTitleAlign
  title: string
  subtitle?: string
	className?: string
}
