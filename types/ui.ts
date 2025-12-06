// types/ui.ts
export type SectionAlign = 'left' | 'center' | 'responsive'
export type SectionWidth = 'default' | 'wide' | 'full'
export type SectionSpacing =
  | 'tight'
  | 'default'
  | 'comfortable'
  | 'spacious'
export type SectionSpacingPosition = 'default' | 'top' | 'bottom'

export type ButtonVariant = "primary" | "secondary"
export type ButtonSize = "sm" | "md" | "lg"

export type SelectDropdownOption = {
  value: string,
  label: string,
}

export type SectionImage = {
  src: string
  alt: string
}

export type CalloutSymbolProps = {
  number: number
}
