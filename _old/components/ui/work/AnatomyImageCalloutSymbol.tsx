// components/ui/work/AnatomyImageCalloutSymbol.tsx
import { CalloutSymbolProps } from "@/types/ui"

export const AnatomyImageCalloutSymbol = ({ number }: CalloutSymbolProps) => (
	<span className='work-anatomy-image-callout-symbol inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent text-bg text-xs font-medium'>
		{number}
	</span>
)

export default AnatomyImageCalloutSymbol
