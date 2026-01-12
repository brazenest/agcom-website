import { cn } from "@/lib/cn"
import { ListItemModel } from "@/types/ui"

export const CardBulletList = ({ bullets, className }: CardBulletListProps) => (
	<ul className={cn("text-xs text-text-muted space-y-1 list-disc list-inside", className)}>
		{bullets.map(({ content }, i) => <li key={i}>{content}</li>)}
	</ul>
)

type CardBulletListProps = {
	bullets: ListItemModel[]
	className?: string
}
