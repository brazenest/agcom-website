import { getClassPrefix } from "@/functions/getClassPrefix"

/*
 * DEFINE component's base classes HERE.
 */
const BASE_CLASSES = [
    'mb-6'
]

export function Heading({
    level = 2,
    children,
    className,
}: {
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    children: React.ReactNode,
    className?: string,
}) {
    const baseClasses = BASE_CLASSES.map(c => [getClassPrefix(c), c])
    const componentClasses = className
        ? className
            .split(' ')
            .map(c => [getClassPrefix(c), c])
        : []

    // Override the base classes that interfere with the provided classes
    componentClasses.forEach(([cPrefix]) => {
        const index = baseClasses
            .map(([bPrefix]) => bPrefix)
            .indexOf(cPrefix)

        if (index > -1) delete baseClasses[index]
    })

    const classes = [
        baseClasses.map(([, c]) => c),
        componentClasses.map(([, c]) => c),
    ].map(parts => parts.join(' ')).join(' ')

    switch (level) {
        case 1:
            return <h1 className={classes}>{children}</h1>
        case 2:
        default:
            return <h2 className={classes}>{children}</h2>
        case 3:
            return <h3 className={classes}>{children}</h3>
        case 4:
            return <h4 className={classes}>{children}</h4>
        case 5:
            return <h5 className={classes}>{children}</h5>
        case 6:
            return <h6 className={classes}>{children}</h6>
    }
}
