// app/blog/articles/[slug]/page.tsx

// These 3 calls together force metadata to run as though it is in client component mode.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { notFound } from "next/navigation";
import BlogArticleClient from "@/components/zones/blog/BlogArticleClient"; // 👈 import client component
import { formatDate } from "@/functions/formatDate";
import { getArticleFromDB } from "@/functions/getArticleFromDB";
import { ArticleT } from "@/types/blog";

export async function generateMetadata({ params }) {
  const { slug } = await params
  try {
    const article = await getArticleFromDB({ slug });

    return {
      title: article?.title ?? "Article",
      description: article?.excerpt ?? "",
    };
  } catch (e) {
    console.error("Metadata DB failure:", e)
    return {
      title: "Article"
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageParams) {
  const { slug } = await params

  const article = await getArticleFromDB({ slug })
  article.date = formatDate(article.date, 'MMMM YYYY')

  if (!article) return notFound();

  // Pass the article down to the client component
  return <BlogArticleClient article={article} />;
}

type BlogPostPageParams = {
  params: {
    slug: string,
  }
}