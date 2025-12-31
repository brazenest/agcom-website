export const Panel = ({ title, className, children }: PanelProps) => (
	<div className={`bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 p-5.25 shadow-sm`}>
		{title && (
			<h3 className="text-3xl font-heading font-bold mb-6.5">{title}</h3>
		)}
		<div className={`panel-content flex mb-4 ${className}`}>
			{children}
		</div>
	</div>
)

type PanelProps = {
  title?: string
  className?: string
  children: React.ReactNode
}
