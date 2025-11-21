import { RowDataPacket } from "mysql2/promise"

export type ArticleIdT = number
export type ArticleSlugT = string
export type ArticleTitleT = string
export type ArticleExcerptT = string
export type ArticleDateT = string
export type ArticleReadtimeT = number
export type ArticleBodyT = string
export type ArticleCategoryT = 'engineering' | 'cinematic' | 'process' | 'other'
export type ArticleImageT = string
export type ArticleHrefT = string
export type ArticleT = RowDataPacket & {
    id: ArticleIdT,
    slug: ArticleSlugT,
    title: ArticleTitleT,
    excerpt: ArticleExcerptT,
    category: ArticleCategoryT,
    image: ArticleImageT,
    date: ArticleDateT,
    dateFormatted?: ArticleDateT,
    body: ArticleBodyT,
    href: ArticleHrefT,
}
