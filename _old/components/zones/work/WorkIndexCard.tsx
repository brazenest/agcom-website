// components/zones/work/WorkIndexCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import { Pill } from '@/components/ui/Pill'

export const WorkIndexCard = ({
	eyebrow,
	title,
	subtitle,
	href,
	imageSrc,
	tags,
	className
}: WorkIndexCardProps) => (
	<Link
		href={href}
		className={cn(
			'group block rounded-lg overflow-hidden border border-border bg-card-bg shadow-sm hover:border-accent/70 hover:shadow-lg transition-all no-underline',
			className
		)}
	>
		<div className='relative h-48 w-full'>
			<Image
				src={imageSrc}
				alt={title}
				fill
				className='object-cover'
			/>
		</div>

		<div className='p-5 space-y-3'>
			<p className='text-xs tracking-wide uppercase text-text-muted'>
				{eyebrow}
			</p>

			<h3 className='font-heading text-lg text-text group-hover:text-accent transition-colors group-hover:underline'>
				{title}
			</h3>

			<p className='text-sm text-text-muted'>
				{subtitle}
			</p>

			<div className='flex flex-wrap gap-2 pt-1'>
				{tags.map(t => (
					<Pill key={t} size='sm' variant='subtle'>
						{t}
					</Pill>
				))}
			</div>
		</div>
	</Link>
)

type WorkIndexCardProps = {
	eyebrow: string
	title: string
	subtitle: string
	href: string
	imageSrc: string
	tags: string[]
	className?: string
}
