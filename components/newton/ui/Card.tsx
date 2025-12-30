export const Card = ({ title, actions, children }: CardProps) => (
  <div className="flex flex-col bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg p-6">
    {title && (
      <h2 className="text-2xl font-heading font-bold mb-4">{title}</h2>
    )}
    <span className="card-content grow-1">
      {children}
      </span>
    {actions && actions.length > 0 && (
      <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 flex space-x-4">
        {actions.map((action, index) => (
          <a
            key={index}
            className={`px-4 py-2 rounded-md ${
              action.variant === 'primary'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
            href={action.link}
          >
            {action.text}
          </a>
        ))}
      </div>
    )}
  </div>
)

type CardProps = {
  title?: string
  actions?: { text: string; link: string; variant?: 'primary' | 'secondary' }[]
  children: React.ReactNode
}