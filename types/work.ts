// types/work.ts

import type { SectionAlign, SectionWidth, SectionSpacing } from './ui'

/**
 * Base type used by all Work-section components
 * Allows alignment, width, and spacing overrides
 * consistent with the Newton-spec <Section> component
 */
export type WorkSectionPropsBase = {
  align?: SectionAlign
  width?: SectionWidth
  spacing?: SectionSpacing
  className?: string
  children?: React.ReactNode
}
