/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

import { cn } from "@/lib/utils";
import { ButtonVariant, ButtonSize } from "@/types/ui";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const buttonBase =
    "inline-flex items-center justify-center font-medium transition-colors " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent " +
    "disabled:opacity-60 disabled:cursor-not-allowed rounded-lg";

const buttonVariants: Record<ButtonVariant, string> = {
	primary:
        "bg-accent text-bg shadow-md hover:bg-accent-hover focus-visible:ring-accent",
	secondary:
        "bg-bg-alt text-text border border-border hover:bg-card-bg-hover",
	ghost: "bg-transparent text-text hover:bg-accent-subtle",
	outline:
        "bg-transparent text-text border border-border hover:border-accent hover:bg-accent-subtle/40",
	soft: "bg-accent-subtle text-text hover:bg-accent-subtle/90",
};

const buttonSizes: Record<ButtonSize, string> = {
	sm: "text-sm px-3 py-1.5",
	md: "text-sm px-4 py-2",
	lg: "text-base px-5 py-2.5",
};

export const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "md",
	className,
	...props
}) => {
	return cn(
		buttonBase,
		buttonVariants[variant],
		buttonSizes[size],
		className
	) && (
		<button
			className={cn(
				buttonBase,
				buttonVariants[variant],
				buttonSizes[size],
				className
			)}
			{...props}
		/>
	);
};

