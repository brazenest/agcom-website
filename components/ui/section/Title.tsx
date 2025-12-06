// components/ui/section/Title.tsx
import { cn } from "@/lib/utils"

const defaults = {
	className: 'font-heading text-3xl md:text-4xl lg:text-5xl font-semibold',
}

export const Title = ({ className, text }: TitleProps) => (
	<h1 className={cn(defaults.className, className)}>
		{text}
	</h1>
)

type TitleProps = {
	className?: string
  text: string
}

export default Title
