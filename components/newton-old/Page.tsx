import { cn } from "@/lib/cn"

export const Page = ({ id, children }: PageProps) => {
	return (
		<main
			id={`${id}-page`}
			className={cn(
				"page",
				`page-${id}`,
				"min-h-screen flex flex-col items-center px-6"
			)}>
			{children}
		</main>
	)
}

type PageProps = {
	id: string
  children: React.ReactNode
}
