/* -------------------------------------------------------------------------- */
/*                                    Badge                                   */
/* -------------------------------------------------------------------------- */

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "soft";
}

export const Badge: React.FC<BadgeProps> = ({
	variant = "default",
	className,
	...props
}) => {
	const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
		default:
            "bg-accent-subtle text-text text-xs font-medium px-2.5 py-1 rounded-full",
		outline:
            "border border-border text-text-muted text-xs font-medium px-2.5 py-1 rounded-full",
		soft:
            "bg-card-bg-hover text-text text-xs font-medium px-2.5 py-1 rounded-full",
	};

	return <span className={cn(styles[variant], className)} {...props} />;
};
