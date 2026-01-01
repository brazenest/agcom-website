import { ImageModel } from "@/types/content"
import { Card } from "./Card"

export const CardLink = ({
	link,
	image,
	title,
	children,
}: CardLinkProps) => (
	<a href={link} className="no-underline">
		<Card
			image={image}
			title={title}
		>
			{children}
		</Card>
	</a>
)

type CardLinkProps = {
  link: string
  image?: ImageModel
  title?: string
  children?: React.ReactNode
}
