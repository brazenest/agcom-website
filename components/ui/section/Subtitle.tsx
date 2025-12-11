import { cn } from "@/lib/utils"

const defaults = {
	className: 'text-base md:text-lg text-text-muted',
}

export const Subtitle = ({ text, className }: SubtitleProps) => (
	<p className={cn(defaults.className, className)}>{text}</p>
)

type SubtitleProps = {
  text: string
  className?: string
}
