export const PrimaryText = ({ tag = 'p', className, children }) => {

    const classNameParts = className ? [className] : []

    classNameParts.push('text-primary dark:text-dark-primary')

    const classes = classNameParts.join(' ')

    switch (tag) {

        case 'div':
            return <div className={classes}>{children}</div>

        case 'p':
        default:
            return <p className={classes}>{children}</p>
    }
}
