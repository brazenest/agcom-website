// app/blog/articles/[slug]/page.tsx
import { getArticles } from "@/functions/get-articles";
import { notFound } from "next/navigation";
import BlogArticleClient from "@/components/blog/BlogArticleClient"; // 👈 import client component

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const theSlug = params.slug;
  const article = await getArticles({ params: [{ key: "slug", value: theSlug }] });

  if (!article) return notFound();

  // Pass the article down to the client component
  return <BlogArticleClient article={article[0]} />;
}
