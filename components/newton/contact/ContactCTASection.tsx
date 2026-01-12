'use client'

import { useContactModal } from "@/hooks/useContactModal"
import { CTASection } from "../layout/CTASection"
import { ActionModel } from "@/types/ui"

export const ContactCTASection = ({
	id,
	heading,
	text,
	actions = [],
}: ContactCTASectionProps) => {

	const { open: openContactModal } = useContactModal()

	const ctaSectionActions: ActionModel[] = [
		{
			variant: 'primary',
			text: 'Contact Me',
			onClick: openContactModal,
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