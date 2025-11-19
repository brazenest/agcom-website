export const PageSection = ({ id, className, children }:  PageSectionProps) => {

    const classParts = className ? [className] : []

    classParts.push('py-12 px-6')
    
    const classes = classParts.join(' ')

    return (
        <section id={id} className={classes}>
            {children}
        </section>
    )
}

type PageSectionProps = {
    id: string,
    className?: string,
    children: React.ReactNode,
}
