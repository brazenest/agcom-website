import { ContentCategoryEnumT } from "./content"

export type AboutCoreRoleT = {
  title: string,
  skills: AboutCoreRoleSkillT[],
}

export type AboutCoreRoleSkillT = string

export type AboutSkillT = {
    title: string,
    tagline: string,
    category: ContentCategoryEnumT,
    labels: AboutSkillLabelT[],
    icon?: React.ReactNode,
}

type AboutSkillLabelT = string

export type AboutTimelineItemT = {
  year: string,
  title: string,
  description: string,
  category?: ContentCategoryEnumT,
}
