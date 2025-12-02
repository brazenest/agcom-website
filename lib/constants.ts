// lib/constants.ts
import { SectionAlign, SectionWidth } from "@/types/ui"

const sectionAligns = {
	left: 'text-left items-start',
	center: 'text-center items-center',
	responsive: 'text-center items-center md:text-left md:items-start',
}

export const getSectionAlign = (align: SectionAlign) => sectionAligns[align]

const sectionWidths = {
	default: 'layout-inner',
	wide: 'layout-inner xl:layout-inner-wide',
	full: 'layout-inner xl:layout-inner-full',
}

export const getSectionWidth = (width: SectionWidth) => sectionWidths[width]
