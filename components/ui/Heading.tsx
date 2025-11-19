export function Heading({
    level = 2,
    children,
    className = "",
    variant = 'normal',
}: {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
    variant?: 'normal' | 'primary' | 'secondary';
}) {
    const baseClassNameFragments = [`font-cinematic font-semibold ${className}`]
    if (level === 1) baseClassNameFragments.push("text-4xl md:text-6xl text-brand-500 dark:text-dark-brand-500")
    else if (level === 2) baseClassNameFragments.push("text-3xl md:text-4xl text-brand-600 dark:text-dark-brand-600")
    else baseClassNameFragments.push("text-xl md:text-2xl")

    if (variant === 'primary') {
        baseClassNameFragments.push('')
    }

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
