/* -------------------------------------------------------------------------- */
/*                              Form Controls                                */
/* -------------------------------------------------------------------------- */

import { cn } from "@/lib/utils/cn";

// Extra “React-y” versions using ComponentProps

export type LabelProps = React.ComponentProps<"label">;

export const Label: React.FC<LabelProps> = ({ className, ...props }) => (
	<label
		className={cn(
			"block text-sm font-medium text-text mb-1.5",
			className
		)}
		{...props}
	/>
);

export type InputProps = React.ComponentProps<"input">;

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
	<input
		className={cn(
			"w-full bg-bg border border-border rounded-md px-3 py-2 text-sm text-text placeholder:text-text-muted",
			"shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1",
			className
		)}
		{...props}
	/>
);

export type TextareaProps = React.ComponentProps<"textarea">;

export const Textarea: React.FC<TextareaProps> = ({
	className,
	rows = 4,
	...props
}) => (
	<textarea
		rows={rows}
		className={cn(
			"w-full bg-bg border border-border rounded-md px-3 py-2 text-sm text-text placeholder:text-text-muted",
			"shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 resize-y",
			className
		)}
		{...props}
	/>
);
