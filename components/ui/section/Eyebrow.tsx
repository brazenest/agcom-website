import { cn } from "@/lib/utils"

const defaults = {
	className: "text-xs font-semibold tracking-[0.18em] uppercase text-text-muted mb-8"
}
export const Eyebrow = ({ text, className }: EyebrowProps) => (
	<p className={cn(defaults.className, className)}>
		{text}
	</p>
)

type EyebrowProps = {
  text: string
	className?: string
}
