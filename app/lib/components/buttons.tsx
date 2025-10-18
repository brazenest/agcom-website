import { ReactNode } from "react"

export const Button = ({ children }) => {
    return (
        <button>{children}</button>
    )
}

export const PrimaryButton = ({ children }) => <Button>{children}</Button>

export const ButtonLink = ({ children, href, theme = 'slate' }: ButtonLinkProps) => {
    const classes = []
    classes.push(
        `bg-${theme}-500`,
        `hover:bg-${theme}-600`,
        `active:bg-${theme}-800`,
        'p-4',
        'm-4',
        'rounded-lg',
        'text-white'
    )
    return (
        <a type="button" href={href} className={classes.join(' ')} >{children}</a>
    )
}

type ButtonLinkProps = {
    children: ReactNode,
    href: string,
    theme?: string,
}