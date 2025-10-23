export const BlogArticleBody = ({ content }: BlogArticleBodyProps) => {

    return (
        <div className="article-body" dangerouslySetInnerHTML={{ __html: content }} />
    )
}

type BlogArticleBodyProps = {
    content: string,
}
