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
    "disabled:opacity-60 disabled:cursor-not-allowed rounded-lg cursor-pointer";

const buttonVariants: Record<ButtonVariant, string> = {
	primary:
        "bg-accent-primary text-bg-default shadow-md hover:bg-accent-hover focus-visible:ring-accent",
	secondary:
        "bg-accent-secondary border border-border",
};

const buttonSizes: Record<ButtonSize, string> = {
	sm: "text-xs sm:text-sm px-3 py-1.5",
	md: "text-sm sm:text-md px-4 py-2",
	lg: "text-sm sm:text-md px-5 py-2.5",
	xl: "sm:text-lg px-6 py-3",
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

