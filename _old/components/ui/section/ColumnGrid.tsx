// components/ui/section/ColumnGrid.tsx
/**
 * A responsive grid layout component that arranges its children in a specified number of columns across different screen sizes.
 * 
 * Data passed as children should typically be Column components, though any valid React nodes can be used.
 */

import { cn } from "@/lib/cn"

const defaults = {
	className: 'section-column-grid grid gap-4 md:gap-6 lg:gap-8',
}

export const ColumnGrid = ({ numAcross, children }: ColumnGridProps) => {

	const className = Object.entries(numAcross)
		.map(([size, num]) => `${size !== 'base' ? `${size}:` : ''}grid-cols-${num}`)
		.join(' ')

	return (
		<div className={cn(defaults.className, className)}>
			{children}
		</div>
	)
}

type ColumnGridProps = {
	numAcross: {
		base: number
		md?: number
		lg?: number
		xl?: number
	}
	children: React.ReactNode
}

export default ColumnGrid
