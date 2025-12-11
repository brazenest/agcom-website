import { Badge } from "../ui/Badge"
import { Card, CardContent } from "../ui/Card"
import { CardBulletList } from "../ui/card/CardBulletList"
import { CoreRoleBullet, WorkDiscipline } from "@/types/work"
import { Heading } from "../ui/Heading"
import { CardHeading } from "../ui/card/CardHeading"
import { BadgeModel, ImageModel } from "@/types/ui"

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
