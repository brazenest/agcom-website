// components/ui/section/Label.tsx
export const Label = ({ text, symbol }: LabelProps) => (
	<h3 className="label text-sm font-semibold tracking-wide uppercase flex items-center gap-2 py-1 my-2">
		{symbol}
		{text}
	</h3>
)

type LabelProps = {
  text: string
  symbol?: React.ReactNode
}

export default Label
