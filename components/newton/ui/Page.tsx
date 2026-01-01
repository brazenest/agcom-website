export const Page = ({ id, children }: PageProps) => (
	<main id={id} role="main">
		{children}
	</main>
)

type PageProps = {
  id: string
  children: React.ReactNode
}
