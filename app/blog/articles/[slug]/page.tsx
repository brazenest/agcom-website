import { BlogArticle } from '@/app/lib/components/blog/blog-article';
import { queryApi } from '@/app/lib/functions/query-api';
import { calculateReadtime } from '@/app/lib/functions/calculate-readtime';
import { notFound } from 'next/navigation';

export default async function BlogArticlePage({ params }) {
    const { slug } = await params
    console.log('Blog Article Slug ===', slug)
    if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
        notFound()
    }

    const queryResponse = await queryApi({ endpoint: 'articles', data: { slug } })

    if (!queryResponse.ok) {
        console.error(queryResponse.message)
        notFound()
    }

    const data = queryResponse.data[0] // first (and only) item
 
    return (
        <div className="article-wrap mx-auto max-w-2xl px-3">
            <BlogArticle
                // id={data.id}
                slug={data.slug}
                excerpt={data.excerpt}
                // author={{ name: data.authorName }}
                title={data.title}
                datePublished={data.datePublished}
                // tags={data.tags}
                readtime={calculateReadtime(data.body)}
                body={data.body}
            />
        </div>
    )
}
