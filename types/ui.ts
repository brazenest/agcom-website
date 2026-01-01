export type ButtonModel = {
  variant: ButtonVariant
  text: string
  link: string
}

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
export type ButtonVariant = 'primary' | 'secondary'

export type CTAButtonModel = ButtonModel & {}

export type LinkModel = {
  href: string,
  content: string | React.ReactNode,
}

export type SectionAlign = 'start' | 'center'

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
  width: number
  height: number
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

export type SelectDropdownOption = {
  value: string,
  label: string,
}
