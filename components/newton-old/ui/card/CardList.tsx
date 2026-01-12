import { cn } from "@/lib/cn"
import { CardModel } from "@/types/ui"
import { Card } from "../Card"

const defaults = {
	className: {
		prefix: 'grid gap-5 md:grid-cols-2',
		postfix: '',
	},
}

export const CardList = ({ cards, className }: CardListProps) => (
	<div className={cn(defaults.className.prefix, className)}>
		{cards.map(({ badge, image, heading, text, bullets, link }, i) => (
			<Card
				key={i}
				badge={badge}
				image={image}
				heading={heading}
				text={text}
				bullets={bullets}
				link={link}
			/>
		))}
	</div>
)

type CardListProps = {
	cards: CardModel[]
	className?: string
}
