// app/blog/articles/[slug]/page.tsx
import { getArticles } from "@/functions/getArticles";
import { notFound } from "next/navigation";
import BlogArticleClient from "@/components/BlogArticleClient"; // 👈 import client component
import { formatDate } from "@/functions/formatDate";
import { ArticleT } from "@/types/article";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const articles: ArticleT[] = (
    await getArticles({ params: { slug } })
  ).map(article => ({
    ...article,
    date: formatDate(article.date, 'MMMM YYYY'),
  }))

  if (!articles[0]) return notFound();

  // Pass the article down to the client component
  return <BlogArticleClient article={articles[0]} />;
}
