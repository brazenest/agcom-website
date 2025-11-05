// app/blog/articles/[slug]/page.tsx
import { getArticles } from "@/functions/get-articles";
import { notFound } from "next/navigation";
import BlogArticleClient from "@/components/blog/BlogArticleClient"; // 👈 import client component
import { formatDate } from "@/functions/formatDate";
import { ArticleT } from "@/types/blog";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const articles: ArticleT[] = (
    await getArticles({ params: [{ key: "slug", value: params.slug }] })
  ).map(article => ({
    ...article,
    date: formatDate(article.date, 'MMMM YYYY'),
  }))

  if (!articles[0]) return notFound();

  // Pass the article down to the client component
  return <BlogArticleClient article={articles[0]} />;
}
