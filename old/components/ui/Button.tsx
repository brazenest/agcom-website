import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({ children, variant = 'default', href = null, handleClick = (ev) => {} }: ButtonProps) => href ? (
    <Link className="btn" href={href}>{children}</Link>
) : (
    <button className={`btn btn-${variant}`} onClick={handleClick}>{children}</button>
)

type ButtonVariantT = 'default' | 'primary' | 'secondary' | 'normal'

type ButtonT = {
    variant: ButtonVariantT,
    href: string | null,
    handleClick: (ev) => void,
    children: ReactNode,
}

type ButtonProps = ButtonT
