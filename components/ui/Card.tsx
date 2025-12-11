import { cn } from "@/lib/utils"
import { CardModel } from "@/types/ui"
import { Badge } from "./Badge"
import NextImage from 'next/image'
import { CardBulletList } from "./card/CardBulletList"
import { CardHeading } from "./card/CardHeading"

export const Card = ({ badge, image, heading, text, bullets, className, children }: CardProps) => {

	return (
		<div
			className={cn("named-card", "bg-card-bg border border-border rounded-xl shadow-sm", className)}>

				{badge && (
					<Badge variant="soft" text={badge.text} className="bg-accent-bg-soft!" />
				)}

				{image && (
					<span className="image-wrap">
						<NextImage
							src={image.src}
							alt={image.alt}
						/>
					</span>
				)}

				{heading && (
					<CardHeading level={3} className="font-heading text-lg md:text-xl mt-4.5 mb-3">
						{heading}
					</CardHeading>
				)}

				{text && (
					<p className="text-sm">
						{text}
					</p>
				)}


				{bullets && (
					<CardBulletList bullets={bullets} className="card-list space-y-1" />
				)}

				{children}

		</div>
	)
}

type CardProps = CardModel & {
	className?: string
	children?: React.ReactNode
}

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
	<div className={cn("px-6 pb-5 pt-2 rounded-xl", className)} {...props} />
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
