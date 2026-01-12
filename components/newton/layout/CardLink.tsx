import { ImageModel } from "@/types/content"
import { Card } from "../ui/Card"
import { BadgeModel, CardSize } from "@/types/ui"

export const CardLink = ({
	size = 'md',
	href,
	image,
	title,
	badges,
	children,
}: CardLinkProps) => (
	<a href={href} className="cardlink no-underline hover:text-blue-500">
		<Card
			size={size}
			image={image}
			title={title}
			badges={badges}
			withLinkSymbol={true}
		>
			{children}
		</Card>
	</a>
)

type CardLinkProps = {
	size?: CardSize
	href: string
	image?: ImageModel
	title?: string
	badges?: BadgeModel[]
	children?: React.ReactNode
}
