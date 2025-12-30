export const Panel = ({ title, className, children }: PanelProps) => (
  <div className={`bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 p-6 shadow-sm`}>
    {title && (
      <h3 className="text-3xl font-heading font-bold mb-4">{title}</h3>
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
