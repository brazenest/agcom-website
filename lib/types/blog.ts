
export type BlogArticleIdT = BlogIdT
export type BlogArticleSlugT = BlogSlugT
export type BlogArticleTitleT = BlogTitleT
export type BlogArticleExcerptT = BlogExcerptT
export type BlogArticleDateT = BlogDateT
export type BlogArticleTagT = BlogTagT
export type BlogArticleAuthorT = BlogAuthorT
export type BlogArticleReadtimeT = BlogReadtimeT
export type BlogArticleBodyT = BlogBodyT
export type BlogArticleT = {
    id: BlogArticleIdT,
    slug: BlogArticleSlugT,
    title: BlogArticleTitleT,
    excerpt: BlogArticleExcerptT,
    datePublished: BlogArticleDateT,
    // tags: BlogArticleTagT[],
    // author: BlogArticleAuthorT,
    readtime: BlogArticleReadtimeT,
    body: BlogArticleBodyT,
}

type BlogEmailT = string
type BlogNameT = string

type BlogIdT = number
type BlogSlugT = string
type BlogTitleT = string
type BlogExcerptT = string
type BlogDateT = Date | string
type BlogTagT = string
type BlogAuthorT = {
    id: BlogIdT,
    email?: BlogEmailT,
    name?: BlogNameT,
}
type BlogReadtimeT = number
type BlogBodyT = string
