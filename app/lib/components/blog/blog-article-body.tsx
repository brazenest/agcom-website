import Markdown from "react-markdown"

export const BlogArticleBody = ({ content }: BlogArticleBodyProps) => (
    <div className="article-body">
        <Markdown>{content}</Markdown>
    </div>
)

type BlogArticleBodyProps = {
    content: string,
}
