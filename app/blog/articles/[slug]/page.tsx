// app/blog/articles/[slug]/page.tsx

// These 3 calls together force metadata to run as though it is in client component mode.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import { notFound } from "next/navigation";
import { getArticleFromDB } from "@/functions/getArticleFromDB";
import { BlogArticleBody } from "@/components/zones/blog/BlogArticleBody";
import { BlogArticleHero } from "@/components/zones/blog/BlogArticleHero";

export async function generateMetadata({ params }) {
	const { slug } = await params
	const article = await getArticleFromDB({ slug });
	if (!article) return {};
	return {
		title: article.title,
		description: article.excerpt ?? undefined,
	};
}

export default async function BlogPostPage({ params }: BlogPostPageParams) {
	const { slug } = await params

	const article = await getArticleFromDB({ slug })
	if (!article) return notFound();

	// Pass the article down to the client component
	return (
		<>
			<BlogArticleHero article={article} />
			<BlogArticleBody body={article.body} />
		</>
	)
}

type BlogPostPageParams = {
  params: {
    slug: string,
  }
}