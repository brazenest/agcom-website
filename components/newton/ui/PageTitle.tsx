export const PageTitle = ({ title, subtitle}: PageTitleProps) => {
  return (
    <span className="page-title-wrap mb-8 block">
      <h1 className="text-7xl font-heading font-bold tracking-tight mb-6">{title}</h1>
      {subtitle && (
        <p className="max-w-4xl text-2xl text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
    </span>
  )
}

type PageTitleProps = {
  title: string
  subtitle?: string
}
