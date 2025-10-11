import { notFound } from 'next/navigation';

export default async function BlogArticlesPage({ params }) {

    const { slug } = await params
    console.log('incoming request, slug:', slug)

    if (!slug.test(/^[a-zA-Z0-9-_]+$/)) {
        console.log('result not found. bad slug format.')
        notFound()
    }

    const response = await fetch(`http://localhost:3000/api/articles?slug=${slug}&test=23`);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    if (result.status === 'not-found') {
        console.log('API response: "not-found"')
        notFound()
    }

    return (
        <main className="mx-auto max-w-5xl p-10">
            <h1>Alden Gillespy&apos;s Blog</h1>

        </main>
    )
}
