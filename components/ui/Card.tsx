import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, ...props }) => (
	<div
		className={cn("bg-card-bg border border-border rounded-xl shadow-sm", className)}
		{...props}
	/>
);

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader: React.FC<CardHeaderProps> = ({
	className,
	...props
}) => (
	<div className={cn("px-6 pt-5 pb-3", className)} {...props} />
);

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle: React.FC<CardTitleProps> = ({
	className,
	...props
}) => (
	<h3
		className={cn(
			"font-heading text-lg md:text-xl text-text",
			className
		)}
		{...props}
	/>
);

export type CardSubtitleProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardSubtitle: React.FC<CardSubtitleProps> = ({
	className,
	...props
}) => (
	<p className={cn("text-sm text-text-muted mt-1", className)} {...props} />
);

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent: React.FC<CardContentProps> = ({
	className,
	...props
}) => (
	<div className={cn("px-6 pb-5 pt-2 space-y-3", className)} {...props} />
);

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const CardFooter: React.FC<CardFooterProps> = ({
	className,
	...props
}) => (
	<div
		className={cn(
			"px-6 py-4 border-t border-border bg-bg-alt/60",
			className
		)}
		{...props}
	/>
);
