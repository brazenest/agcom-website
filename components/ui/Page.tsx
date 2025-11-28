import { cn } from "@/lib/utils"

export const Page = ({ id, className = '', children }: PageProps) => {
	return (
		<main id={id} className={cn('layout-page', className)}>
			{children}
		</main>
	)
}

type PageProps = {
    id: string,
    className?: string,
    children: React.ReactNode,
}
