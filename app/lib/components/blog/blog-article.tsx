import Link from "next/link";
import type { BlogArticleIdT, BlogArticleSlugT, BlogArticleTitleT, BlogArticleAuthorT, BlogArticleDateT, BlogArticleTagT, BlogArticleBodyT, BlogArticleReadtimeT, BlogArticleExcerptT } from "../../types/blog";
import { BlogArticleBody } from "./blog-article-body";
import { calculateReadtime } from "../../functions/calculate-readtime";

export const BlogArticle = ({ id, title, slug, excerpt, datePublished, tags, author, readtime, body }: BlogArticlePropsT) => {

    const date = new Date(datePublished)
    const articleDate = date.toISOString().split('T')[0]

    return (
        <article id={`article-${id}`}>
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <ul className="article-meta list-none flex space-x-5 text-sm">
                <li>by <a href={`mailto:no@name.com`}>{author.name}</a></li>
                <li>{articleDate}</li>
                <li>{calculateReadtime(body)}</li>
                <li><Link href={`/blog/search/tag/${tags[0].slug}`}>{tags[0].name}</Link></li>
                <
            </ul>
            <div className="article-body"><BlogArticleBody content={`<span class="article-body-inner">${body}</span>`} /></div>
        </article>
    )
}

type BlogArticlePropsT = {
    id: BlogArticleIdT,
    slug: BlogArticleSlugT,
    title: BlogArticleTitleT,
    excerpt: BlogArticleExcerptT,
    datePublished: BlogArticleDateT,
    tags: BlogArticleTagT[],
    author: BlogArticleAuthorT,
    readtime: BlogArticleReadtimeT
    body: BlogArticleBodyT,
}
