'use client'

import { CTASection } from "../layout/CTASection"
import { ActionModel } from "@/types/ui"

export const ContactCTASection = ({
	id,
	heading,
	text,
	actions = [],
}: ContactCTASectionProps) => {

	const ctaSectionActions: ActionModel[] = [
		{
			variant: 'primary',
			text: 'Contact Me',
			href: 'mailto:contact@aldengillespy.com?subject=Reaching out to you from your site',
		},
		...actions,
	]

	return (
		<CTASection
			id={id}
			heading={heading}
			text={text}
			actions={ctaSectionActions}
		/>
	)
}

type ContactCTASectionProps = {
  id: string
  heading: string
  text: string
  actions?: ActionModel[]
}