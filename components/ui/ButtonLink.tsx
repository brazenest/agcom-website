import Link from "next/link"
import { Button } from "./Button"
import { ButtonVariantT } from "@/types/ui"

export const ButtonLink = ({ href, size = 'md', variant = "secondary", children}: ButtonLinkProps) => (
	<Button variant={variant} size={size}>
		<Link href={href}>
			{children}
		</Link>
	</Button>
)

type ButtonLinkProps = {
    href: string,
		size?: 'sm' | 'md' | 'lg',
    variant?: ButtonVariantT,
    children: string | React.ReactNode,
}