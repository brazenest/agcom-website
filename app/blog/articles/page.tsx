import { notFound } from "next/navigation";
import { createArticleUrlFromSlug } from "@/app/lib/create-article-url-from-slug"
import { ListItem } from "@/app/lib/components/list";

export default async function BlogArticlesPage() {

    const response = await fetch(`http://localhost:3000/api/articles?sortOrder=newestFirst`);
    if (!response.ok) {
        throw new Error(`Response: ${response.status} ${response.statusText}`);
    }

    const result = await response.json()
    if (!result.ok) {
        notFound()
    }

    const articles = result.data[0]

    return (
        <>
            <h2 className="text-xl mb-3">Articles</h2>
            <ol id="articles-list" className="list">
                {articles.map(({ slug, title }) => <ListItem key={slug}><a href={createArticleUrlFromSlug(slug)}>{title}</a></ListItem>)}
            </ol>
        </>

    )
}