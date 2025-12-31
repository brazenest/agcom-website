export const PageTitle = ({ title, subtitle}: PageTitleProps) => {
	return (
		<span className="page-title-wrap mb-22.5 block">
			<h1 className="text-6xl font-heading font-bold mb-7">{title}</h1>
			{subtitle && (
				<p className="max-w-4xl text-2xl text-gray-500 dark:text-gray-500">{subtitle}</p>
			)}
		</span>
	)
}

type PageTitleProps = {
  title: string
  subtitle?: string
}
