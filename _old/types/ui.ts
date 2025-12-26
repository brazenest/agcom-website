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
export type ButtonSize = "sm" | "md" | "lg" | 'xl'

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

export type CardBulletListItemModel = {
  text: string
}

export type CardModel = {
  badge?: BadgeModel
  image?: ImageModel
  heading?: string
  text?: string
  bullets?: ListItemModel[]
  link?: LinkModel
}

export type ImageModel = {
  src: string
  alt: string
}

export type ListItemModel = {
  content: React.ReactNode | string
}

export type ListModel = {
  ordered: boolean
  items: ListItemModel[]
}

export type BadgeModel = {
  icon?: string
  text: string
}

type TagModel = BadgeModel & {
  removable: boolean
}

type LinkModel = {
  href: string
  title?: string
}
