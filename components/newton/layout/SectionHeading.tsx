export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
	return (
		<span className="section-heading-wrap mb-7.75 block">
			<h2 className="section-heading-title text-5xl lg:text-5xl font-heading font-semibold md:leading-14 tracking-tight mb-5.5">{title}</h2>
			{subtitle && (
				<p className="section-heading-subtitle max-w-2xl lg:max-w-3xl text-xl font-light text-gray-500 dark:text-gray-500 tracking-wide leading-7.5 border-s border-gray-200 dark:border-gray-700/50 py-2 ps-5.5">{subtitle}</p>
			)}
		</span>
	)
}

type SectionHeadingProps = {
  title: string
  subtitle?: string
}
