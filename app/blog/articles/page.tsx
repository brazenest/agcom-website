import Navbar from "@/components/SiteNavbar";
import { formatDate } from "@/functions/formatDate";
import { getArticles } from "@/functions/get-articles";
import { ArticleT } from "@/types/blog";
import Link from "next/link";

export default async function BlogPage() {
  const articles: ArticleT[] = (
    await getArticles()
  ).map(article => ({
    ...article,
    date: formatDate(article.date, 'MMMM YYYY'),
  }))

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-24">
        {/* Ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(58,167,255,0.05),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,156,74,0.05),transparent_60%)] pointer-events-none" />

        <h1 className="font-cinema text-4xl mb-8 text-gradient">Blog</h1>

        <div className="grid gap-10">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="card block hover:bg-[var(--color-surface-alt)] transition-colors"
            >
              <h2 className="font-cinema text-2xl mb-2">{article.title}</h2>
              <p className="font-engineering text-[var(--color-text-secondary)] mb-4">{article.excerpt}</p>
              <p className="font-engineering text-xs text-[var(--color-text-secondary)]">{article.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
