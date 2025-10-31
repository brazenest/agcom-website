import { BlogArticleAuthorT, BlogArticleBodyT, BlogArticleDateT, BlogArticleExcerptT, BlogArticleIdT, BlogArticleReadtimeT, BlogArticleSlugT, BlogArticleTagT, BlogArticleTitleT } from "../../app/lib/types/blog";

export type BlogArticleModel = {
    id: BlogArticleIdT,
    title: BlogArticleTitleT,
    slug: BlogArticleSlugT,
    excerpt: BlogArticleExcerptT,
    date: BlogArticleDateT,
    tags: BlogArticleTagT[],
    author: BlogArticleAuthorT,
    readTime: BlogArticleReadtimeT,
    body: BlogArticleBodyT,

}
