import { ArticleAuthorT, ArticleBodyT, ArticleDateT, ArticleExcerptT, ArticleIdT, ArticleReadtimeT, ArticleSlugT, ArticleTagT, ArticleTitleT } from "@/types/blog";

export type BlogArticleModel = {
    id: ArticleIdT,
    title: ArticleTitleT,
    slug: ArticleSlugT,
    excerpt: ArticleExcerptT,
    date: ArticleDateT,
    tags: ArticleTagT[],
    author: ArticleAuthorT,
    readTime: ArticleReadtimeT,
    body: ArticleBodyT,

}
