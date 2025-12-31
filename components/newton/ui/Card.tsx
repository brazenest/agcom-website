export const Card = ({ title, actions, children }: CardProps) => (
	<div className="flex flex-col bg-gray-100 dark:bg-gray-900 shadow-md rounded-lg p-4">
		{title && (
			<h4 className="text-2xl font-heading font-semibold mb-4">{title}</h4>
		)}
		<span className="card-content grow-1">
			{children}
		</span>
		{actions && actions.length > 0 && (
			<div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex space-x-4">
				{actions.map((action, index) => (
					<a
						key={index}
						className={`px-4 py-2 rounded-md ${
							action.variant === 'primary'
								? 'bg-blue-500 text-white'
								: 'bg-gray-50 text-gray-950'
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