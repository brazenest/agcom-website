import { JSX } from "react";

export function Heading({
    level = 2,
    children,
    className = "",
}: {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
}) {
    const baseClassNameFragments = [`font-cinematic font-semibold text-text dark:text-dark-text ${className}`]
    if (level === 1) baseClassNameFragments.push("text-4xl md:text-6xl")
    else if (level === 2) baseClassNameFragments.push("text-3xl md:text-4xl")
    else baseClassNameFragments.push("text-xl md:text-2xl")

    const classNameString = baseClassNameFragments.join(' ')

    switch (level) {
        case 1:
            return <h1 className={classNameString}>{children}</h1>
        case 2:
        default:
            return <h2 className={classNameString}>{children}</h2>
        case 3:
            return <h3 className={classNameString}>{children}</h3>
        case 4:
            return <h4 className={classNameString}>{children}</h4>
        case 5:
            return <h5 className={classNameString}>{children}</h5>
        case 6:
            return <h6 className={classNameString}>{children}</h6>
    }
}
