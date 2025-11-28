export const Eyebrow = ({ text }: EyebrowProps) => (
	<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
		{text}
	</p>
)

type EyebrowProps = {
  text: string
}
