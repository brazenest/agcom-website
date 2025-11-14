
export type ArticleIdT = number
export type ArticleSlugT = string
export type ArticleTitleT = string
export type ArticleExcerptT = string
export type ArticleDateT = string
export type ArticleReadtimeT = number
export type ArticleBodyT = string
export type ArticleCategoryT = 'engineering' | 'cinematic' | 'personal'
export type ArticleHrefT = string
export type ArticleT = {
    id: ArticleIdT,
    slug: ArticleSlugT,
    title: ArticleTitleT,
    excerpt: ArticleExcerptT,
    date: ArticleDateT,
    readtime: ArticleReadtimeT,
    body: ArticleBodyT,
    category: ArticleCategoryT,
    href: ArticleHrefT,
}
