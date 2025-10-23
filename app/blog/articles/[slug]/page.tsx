import { BlogArticle } from '@/app/lib/components/blog-article';
import { notFound } from 'next/navigation';

export default async function BlogArticlesPage({ params }) {
    const { slug } = await params

    if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
        notFound()
    }

    const response = await fetch(`http://localhost:3000/api/articles?slug=${slug}`);
    if (!response.ok) {
        console.error(`Response status: ${response.status} ${response.statusText}`);
        notFound()
    }

    const result = await response.json()
    if (!result.ok) {
        console.error(result.message)
        notFound()
    }

    const data = result.data[0]

    return (
        <div className="article-wrap mx-auto max-w-5xl px-3">
            <BlogArticle
                id={data.id}
                slug={data.slug}
                author={{ name: data.authorName }}
                title={data.title}
                datePublished={data.datePublished}
                tags={data.tags}
                body={data.body}
            />
        </div>
    )
}
