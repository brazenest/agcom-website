import { parse } from 'node-html-parser'
import { BlogArticleBody } from "./blog-article-body";

export const BlogArticle = ({ id, title, datePublished, author, body, tags }: BlogArticleProps) => {
    // Construct date meta
    const date = new Date(datePublished)
    const articleDate = date.toISOString().split('T')[0]

    return (
        <article id={`article-${id}`}>
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <ul className="article-meta list-none flex space-x-5 text-sm">
                <li>by <a href={`mailto:no@name.com`}>{author.name}</a></li>
                <li>{articleDate}</li>
            </ul>
            <div className="article-body"><BlogArticleBody content={`<span class="article-body-inner">${body}</span>`} /></div>
        </article>
    )
}

type BlogArticleProps = {
    id: BlogArticleId,
    slug: BlogArticleSlug,
    title: BlogArticleTitle,
    author: BlogArticleAuthor,
    datePublished: BlogArticleDate,
    tags: BlogArticleTag[],
    body: BlogArticleBody,
}

type BlogArticleId = BlogId
type BlogArticleSlug = BlogSlug
type BlogArticleTitle = BlogTitle
type BlogArticleAuthor = {
    email?: BlogEmail,
    name?: BlogName,
}
type BlogArticleDate = BlogDate
type BlogArticleTag = BlogTag
type BlogArticleBody = BlogBody

type BlogId = string
type BlogSlug = string
type BlogTitle = string
type BlogEmail = string
type BlogName = string
type BlogDate = Date | string
type BlogTag = string
export type BlogBody = string
