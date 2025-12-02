// components/ui/ButtonLink.tsx
import Link from "next/link"
import { Button } from "./Button"
import { ButtonVariant } from "@/types/ui"

export const ButtonLink = ({ href, size = 'md', variant = "secondary", className = '', children}: ButtonLinkProps) => (
	<Button variant={variant} size={size} className={className}>
		<Link href={href}>
			{children}
		</Link>
	</Button>
)

type ButtonLinkProps = {
    href: string,
		size?: 'sm' | 'md' | 'lg',
		className?: string,
    variant?: ButtonVariant,
    children: string | React.ReactNode,
}