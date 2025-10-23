export type BlogArticleIdT = BlogIdT
export type BlogArticleSlugT = BlogSlugT
export type BlogArticleTitleT = BlogTitleT
export type BlogArticleExcerptT = BlogExcerptT
export type BlogArticleDateT = BlogDateT
export type BlogArticleTagT = BlogTagT
export type BlogArticleAuthorT = BlogAuthorT
export type BlogArticleReadtimeT = BlogReadtimeT
export type BlogArticleBodyT = BlogBodyT

type BlogIdT = string
type BlogSlugT = string
type BlogTitleT = string
type BlogExcerptT = string
type BlogDateT = Date
type BlogTagT = {
    name: string,
    slug: string,
}
type BlogAuthorT = {
    email?: BlogEmailT,
    name?: BlogAuthorNameT,
}
type BlogReadtimeT = number
type BlogEmailT = string
type BlogAuthorNameT = string
type BlogBodyT = string
