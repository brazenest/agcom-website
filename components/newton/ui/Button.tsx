/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */

import { cn } from "@/lib/cn";
import { ButtonVariant, ButtonSize } from "@/types/newton/ui";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

const buttonSizes: Record<ButtonSize, string> = {
	sm: "text-xs sm:text-sm px-3 py-1.5",
	md: "text-sm sm:text-md px-4 py-2",
	lg: "text-sm sm:text-md px-5 py-2.5",
	xl: "sm:text-lg px-6 py-3",
};

export const Button: React.FC<ButtonProps> = ({
	variant = "secondary",
	size = "md",
	className,
	...props
}) => {
	return cn(
		buttonSizes[size],
		className
	) && (
			<button
				className={cn(
					buttonSizes[size],
					className
				)}
				{...props}
			/>
		);
};

