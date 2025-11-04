
export type ArticleIdT = IdT
export type ArticleSlugT = SlugT
export type ArticleTitleT = TitleT
export type ArticleExcerptT = ExcerptT
export type ArticleDateT = DateT
export type ArticleTagT = TagT
export type ArticleAuthorT = AuthorT
export type ArticleReadtimeT = ReadtimeT
export type ArticleBodyT = BodyT
export type ArticleT = {
    id: ArticleIdT,
    slug: ArticleSlugT,
    title: ArticleTitleT,
    excerpt: ArticleExcerptT,
    datePublished: ArticleDateT,
    // tags: ArticleTagT[],
    // author: ArticleAuthorT,
    readtime: ArticleReadtimeT,
    body: ArticleBodyT,
}

type EmailT = string
type NameT = string

type IdT = number
type SlugT = string
type TitleT = string
type ExcerptT = string
type DateT = Date | string
type TagT = string
type AuthorT = {
    id: IdT,
    email?: EmailT,
    name?: NameT,
}
type ReadtimeT = number
type BodyT = string
