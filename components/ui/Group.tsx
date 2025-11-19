export const Group = ({ id, wrap = false, children }: GroupProps) => {
    const classes: ClassNameClause[] = ["flex gap-4"]

    if (wrap) classes.push('flex-wrap')

    return (
        <div id={id} className={classes.join(' ')}>
            {children}
        </div >
    )
}

type GroupProps = {
    id?: string,
    wrap?: boolean,
    children: React.ReactNode,
}

type ClassNameClause = string
