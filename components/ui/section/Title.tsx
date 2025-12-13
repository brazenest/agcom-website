// components/ui/section/Title.tsx
import { cn } from "@/lib/utils"

const defaults = {
	className: 'font-heading font-semibold text-3xl leading-9.25 md:text-4xl md:leading-14 lg:text-5xl',
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
