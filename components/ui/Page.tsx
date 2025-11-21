export const Page = ({ id, className, children }: PageProps) => {
	const classParts = className ? [className] : []

	classParts.push('layout-page')

	const classes = classParts.join(' ')

	return (
		<main id={id} className={classes}>
			{children}
		</main>
	)
}

type PageProps = {
    id: string,
    className?: string,
    children: React.ReactNode,
}
