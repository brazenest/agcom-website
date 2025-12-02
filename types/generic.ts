// types/generic.ts
import { ReactElement } from "react"

export type ElementIdAttribute = string
export type ElementClassAttribute = string
export type ElementContent = string | ReactElement

export type UrlQueryParam = {
    key: string,
    value: string | number,
}

export type SiteThemeMode = 'light' | 'dark' | 'system'
