// components/ui/Pill.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

type PillVariant = "subtle" | "soft" | "outline";
type PillSize = "sm" | "md";

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: PillVariant;
  size?: PillSize;
  /**
   * When true, styles & semantics hint at interactivity
   * (hover, cursor-pointer). Default false = label only.
   */
  interactive?: boolean;
}

export function Pill({
	variant = "soft",
	size = "sm",
	interactive = false,
	className,
	children,
	...props
}: PillProps) {
	const base =
    "inline-flex items-center rounded-full border px-3 py-1 select-none whitespace-nowrap";

	const sizeClasses =
    size === "md"
    	? "text-sm"
    	: "text-xs";

	const variantClasses =
    variant === "outline"
    	? "bg-transparent border-border/70 text-text-muted"
    	: variant === "subtle"
    		? "bg-surface/70 border-border/40 text-text-muted"
    		: // soft
    		"bg-surface/80 border-border/60 text-text";

	const interactionClasses = interactive
		? "cursor-pointer transition-colors hover:border-accent/70 hover:text-accent"
		: "cursor-default";

	return (
		<span
			className={cn(
				base,
				sizeClasses,
				variantClasses,
				interactionClasses,
				className
			)}
			{...props}
		>
			{children}
		</span>
	);
}
