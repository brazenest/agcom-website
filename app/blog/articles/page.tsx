import { createArticleUrlFromSlug } from "@/app/lib/functions/create-article-url-from-slug"
import { ListItem } from "@/app/lib/components/list";
import { getTags } from "@/app/lib/functions/get-tags";

export default async function BlogArticlesPage() {

    const tags = await getTags()
    return (
        <div className="md:flex">
            <div className="w-2/3">
                <h2 className="text-2xl mb-4">Articles I&apos;ve Written</h2>
                <ol id="articles-list" className="list">
                    {articles.map(({ slug, title, excerpt }) => <ListItem key={slug}><a href={createArticleUrlFromSlug(slug)}><h3 className="text-xl mb-2 font-bold">{title}</h3></a><p>{excerpt}</p></ListItem>)}
                </ol>
            </div>
            <div className="w-1/3">
                <h2 className="text-xl mb-4">Tag Cloud</h2>
                {tags}
            </div>

        </div>

    )
}