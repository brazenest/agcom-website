import { ReactElement } from "react"

export default function Link({ href, children }: LinkProps) {
    return (
        <li>
            <a href={ href }>{ children }</a>
        </li>
    )
}

type LinkProps = {
    href: string,
    children: string | ReactElement,
}
