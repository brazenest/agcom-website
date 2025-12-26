// types/section.ts

type SectionThemeVersion = string
type SectionThemeName = 'default' | 'engineering' | 'cinematic' | 'hybrid'
type SectionThemeVariantName = 'default'
export type SectionThemeWeightName = 0 | 1 | 2 | 3 | 4 | 5
type SectionThemeWeightStyle = string
export type SectionSpacingName = 'tight' | 'default' | 'comfortable' | 'spacious'
type SectionSpacingStyle = string

type SectionThemeWeightSet = {
  [k in SectionThemeWeightName]: SectionThemeWeightStyle
}
type SectionThemeVariant = {
  weights: SectionThemeWeightSet
}
type SectionThemeVariantSet = {
  [k in SectionThemeVariantName]: SectionThemeVariant
}

type SectionSpacing = {
  default: SectionSpacingStyle
  top: SectionSpacingStyle
  bottom: SectionSpacingStyle
}
export type SectionSpacingSet = {
  [k in SectionSpacingName]: SectionSpacing
}

export type SectionTheme = {
  version: SectionThemeVersion
  variants: SectionThemeVariantSet
  spacings: SectionSpacingSet
}
export type SectionThemeSet = {
  [k in SectionThemeName]: SectionTheme
}

export type SectionDefaults = {
  themes: SectionThemeSet
}

export type SectionPropsBase = {
  weight?: SectionThemeWeightName
  className?: string
}