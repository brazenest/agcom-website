import { cn } from "@/lib/cn"

const defaults = {
	className: 'text-xs font-medium px-2.5 py-1 rounded-full'
}
export const Badge = ({
	variant = "default",
	className,
	children
}: BadgeProps) => {
	const styles: BadgeVariantSet = {
		default:
			"bg-subtle text-fg-default",
		outline:
			"border border-border text-fg-muted ",
		soft:
			"bg-bg-raised text-fg-default",
	}

	return <span className={cn(defaults.className, styles[variant], className)}>{children}</span>;
}

type BadgeVariantSet = {
	[k in BadgeVariant]: string
}
type BadgeVariant = "default" | "outline" | "soft"
type BadgeProps = {
	variant?: BadgeVariant
	className?: string
	children: React.ReactNode
}
