// components/ui/Callout.tsx
export const Callout = ({ children }: CalloutProps) => (
	<div className="callout border-l-4 border-accent bg-accent/10 p-4">
		<div className="callout-content pl-2 text-text-muted">
			{children}
		</div>
	</div>
)

type CalloutProps = {
  children: React.ReactNode
}

export default Callout
