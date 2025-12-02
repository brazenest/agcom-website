// types/work.ts
import { SectionColorWeight } from './section'
import type { SectionAlign, SectionWidth, SectionSpacing } from './ui'

/**
 * Base type used by all Work-section components
 * Allows alignment, width, and spacing overrides
 * consistent with the Newton-spec <Section> component
 */
export type WorkSectionPropsBase = {
  weight?: SectionColorWeight
  align?: SectionAlign
  width?: SectionWidth
  spacing?: SectionSpacing
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export type WorkIndexItem = {
  eyebrow: string
  title: string
  subtitle: string
  href: string
  imageSrc: string
  tags: string[]
}

export type CaseStudyData = {
  hero: {
    eyebrow: string
    title: string
    subtitle?: string
    image: {
      src: string
      alt: string
    }
    tags: string[]
  }
  abstract: {
    content: string
  }
  meta: {
    subtitle: string
    columns: {
      label: string
      value: string | string[]
      usePills?: boolean
    }[]
  }
  pao: {
    title: string
    subtitle?: string
    problem: string
    approach: string
    outcome: string
  }
}
