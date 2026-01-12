import { cn } from "@/lib/cn"
import { Heading, HeadingLevel } from "@/components/newton/ui/Heading"

const defaults = {
	className: "font-heading text-lg md:text-xl text-text mt-3.5 mb-3"
}

export const CardHeading = ({ level, className, children }: CardHeadingProps) => {
	return (
		<Heading level={level} className={cn(defaults.className, className)}>{children}</Heading>
	)
}

type CardHeadingProps = {
	level?: HeadingLevel
	className?: string
	children: React.ReactNode
}