'use client'

import { useContactModal } from '@/hooks/useContactModal'
import { Button } from './Button'
import { ButtonVariant } from '@/types/ui'

export const ContactButton = ({ children, variant = 'primary', className = '' }: ContactButtonProps) => {
	const { open } = useContactModal();

	return (
		<Button
			className={className}
			onClick={open}
			variant={variant}
		>
			{children}
		</Button>
	)
}

type ContactButtonProps = {
    variant?: ButtonVariant
    className?: string
    children:  React.ReactNode
}

export default ContactButton
