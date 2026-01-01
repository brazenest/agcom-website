/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

import { cn } from "@/lib/cn";
import { ButtonVariant, ButtonSize } from "@/types/ui";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: React.ReactNode
}

const buttonSizes: Record<ButtonSize, string> = {
	sm: "text-xs sm:text-sm px-3 py-1.5",
	md: "text-sm sm:text-md px-4 py-2",
	lg: "text-sm sm:text-lg px-5 py-2.5",
	xl: "sm:text-lg px-6 py-3",
};

const variantStyles: Record<ButtonVariant, string> = {
	primary:
		"bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300",
	secondary:
		"bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-4 focus:ring-gray-400",
};

export const Button: React.FC<ButtonProps> = ({
	variant = "secondary",
	size = "md",
	className,
	children,
	...props
}) => {
	return cn(
		buttonSizes[size],
		className
	) && (
		<button
			className={cn(
				buttonSizes[size],
				variantStyles[variant],
				'rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition  ',
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};

