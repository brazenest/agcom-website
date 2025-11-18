import Link from "next/link"
import { Button } from "./Button"
import type { ButtonVariantT } from "./Button"

export const ButtonLink = ({ href, variant = "secondary", children}: ButtonLinkProps) => (
    <Button variant={variant}>
        <Link href={href}>
        {children}
        </Link>
    </Button>
)

type ButtonLinkProps = {
    href: string,
    variant?: ButtonVariantT,
    children: string | React.ReactNode,
}