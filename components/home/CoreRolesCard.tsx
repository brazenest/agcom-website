import { Card } from "../ui/Card"
import { CoreRoleBullet, WorkDiscipline } from "@/types/work"
import { BadgeModel } from "@/types/ui"

export const CoreRolesCard = ({
	badgeText,
	headingText,
	bodyText,
	bullets,
}: CoreRolesCardProps) => {
	return (
		<Card
			badge={{text: badgeText} as BadgeModel}
			heading={headingText}
			text={bodyText}
			bullets={bullets.map(bullet => ({ content: bullet }))}
		/>
	)
}

type CoreRolesCardProps = {
  discipline: WorkDiscipline,
  badgeText: string
  headingText: string
  bodyText: string
  bullets: CoreRoleBullet[]
}
