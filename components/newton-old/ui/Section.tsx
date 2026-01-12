// components/ui/Section.tsx
import { cn } from '@/lib/cn'
import { SectionAlign } from '@/types/ui'
import { Title } from './section/Title'
import { Subtitle } from './section/Subtitle'

const defaults = {
	className: 'w-full py-16 md:py-20 lg:py-24 px-6',
}

export const Section = ({
	align = 'start',
	id,
	title,
	subtitle,
	className,
	children,
}: SectionProps) => {

	const alignClass = `${align === 'center' ? 'items-center text-center' : 'items-start text-start'}`;

	return (
		<section id={id} className={cn(defaults.className, className)}>
			<div className={cn("flex flex-col", alignClass)}>
				{(title || subtitle) && (
					<header className="max-w-2xl lg:max-w-3xl">
						{title && <Title text={title} className="mt-10 mb-7 leading-10.5" />}
						{subtitle && <Subtitle text={subtitle} />}
					</header>
				)}
				{children}
			</div>
		</section>
	);
}

type SectionProps = {
	align?: SectionAlign
	id: string
	title?: string
	subtitle?: string
	className?: string
	children?: React.ReactNode
}
