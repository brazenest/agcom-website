import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { WorkSectionPropsBase } from "@/types/work";

const defaults = {
	className: 'work-before-after',
	title: 'Before & After',
}

export function WorkBeforeAfter({
	align,
	width,
	spacing = 'default',
	className,
	title = defaults.title,
	subtitle,
	before,
	after,
}: WorkBeforeAfterProps) {
	return (
		<Section
			align={align}
			width={width}
			spacing={spacing}
			className={cn(defaults.className, className)}
			title={title}
			subtitle={subtitle}
		>
			<div className='grid gap-10 md:grid-cols-2'>
				<div className='space-y-3'>
					<h4 className='font-heading text-base text-text'>Before</h4>
					<Image
						src={before}
						alt='Before redesign'
						width={1200}
						height={800}
						className='rounded-lg border border-border'
					/>
				</div>

				<div className='space-y-3'>
					<h4 className='font-heading text-base text-text'>After</h4>
					<Image
						src={after}
						alt='After redesign'
						width={1200}
						height={800}
						className='rounded-lg border border-border'
					/>
				</div>
			</div>
		</Section>
	);
}

export default WorkBeforeAfter;

type BeforeAfterSide = string

type WorkBeforeAfterProps = WorkSectionPropsBase & {
	title?: string
	subtitle?: string
	before: BeforeAfterSide
	after: BeforeAfterSide
}
