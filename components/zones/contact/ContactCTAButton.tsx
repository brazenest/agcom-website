// components/zones/contact/ContactCTAButton.tsx
"use client"

import { useContactModal } from "@/hooks/useContactModal"
import { Button } from "@/components/ui/Button"
import { ButtonSize } from "@/types/ui"

export const ContactCTAButton = ({
	size = "lg",
	className,
	children = "Get in touch",
}: ContactCTAButtonProps) => {

	const contactModal = useContactModal()

	return (
		<Button
			size={size}
			className={className}
			onClick={contactModal.open}
			type="button"
		>
			{children}
		</Button>
	)
}

type ContactCTAButtonProps = {
  size?: ButtonSize
  children?: React.ReactNode
  className?: string
}

export default ContactCTAButton
