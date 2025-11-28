// types/ui.ts

export type SectionAlign = 'left' | 'center' | 'responsive'
export type SectionWidth = 'default' | 'wide' | 'full'
export type SectionSpacing =
  | 'tight'
  | 'default'
  | 'comfortable'
  | 'spacious'

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "soft"
export type ButtonSize = "sm" | "md" | "lg"

export type SelectDropdownOption = {
  value: string,
  label: string,
}
