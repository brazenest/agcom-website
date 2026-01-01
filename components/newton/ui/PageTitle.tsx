export const PageTitle = ({ title, subtitle}: PageTitleProps) => {
	return (
		<span className="page-title-wrap border-b border-gray-200 dark:border-gray-800 pb-5.75 mb-12.25 block">
			<h1 className="text-5xl font-heading font-semibold leading-14.5 mb-7">{title}</h1>
			{subtitle && (
				<p className="max-w-4xl text-xl text-gray-500 dark:text-gray-500">{subtitle}</p>
			)}
		</span>
	)
}

type PageTitleProps = {
  title: string
  subtitle?: string
}
