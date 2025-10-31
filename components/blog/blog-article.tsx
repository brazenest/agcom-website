import Markdown from "react-markdown";
import type { BlogArticleSlugT, BlogArticleTitleT, BlogArticleDateT, BlogArticleBodyT, BlogArticleReadtimeT, BlogArticleExcerptT } from "../../app/lib/types/blog";

export const BlogArticle = ({ title, slug, excerpt, datePublished, readtime, body }: BlogArticlePropsT) => {

    const date = new Date(datePublished)
    const articleDate = date.toISOString().split('T')[0]

    return (
        <article id={`article--${slug}`} className="prose lg:prose-lg xl:prose-xl max-w-none my-12">
            <h1 className="text-4xl font-bold mb-7 leading-normal">{title}</h1>
            <ul className="article-meta list-none flex space-x-5 text-sm">
                {/* <li>by <a href={`mailto:no@name.com`}>{author.name}</a></li> */}
                <li>{articleDate}</li>
                <li>{readtime} minute read</li>
                {/* <li><Link href={`/blog/search/tag/${tags[0].slug}`}>{tags[0].name}</Link></li> */}
            </ul>
            <p className="article-excerpt text-lg text-gray-700 mt-6 mb-12">{excerpt}</p>
            <div className="article-body">
                <Markdown>{body}</Markdown>
            </div>
        </article>
    )
}

type BlogArticlePropsT = {
    // id: BlogArticleIdT,
    slug: BlogArticleSlugT,
    title: BlogArticleTitleT,
    excerpt: BlogArticleExcerptT,
    datePublished: BlogArticleDateT,
    // tags: BlogArticleTagT[],
    // author: BlogArticleAuthorT,
    readtime: BlogArticleReadtimeT
    body: BlogArticleBodyT,
}
