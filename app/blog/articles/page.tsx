export const dynamic = "force-dynamic";

import { Page } from "@/components/ui/Page";
import { PageTitle } from "@/components/ui/PageTitle";
import { BlogArticlesSection } from "@/components/zones/blog/BlogArticlesSection";
import { BlogIntroSection } from "@/components/zones/blog/BlogIntroSection";
import { getArticlesFromDB } from "@/functions/getArticlesFromDB";
import { ArticleT } from "@/types/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog – Engineering, Design & Cinematic Storytelling | Alden Gillespy",
};

export default async function BlogPage() {
	const articles: ArticleT[] = await getArticlesFromDB({})

	return (
		<Page id="blog">
			<PageTitle title="Blog" />
			<BlogIntroSection />
			<BlogArticlesSection articles={articles} />
		</Page>
	);
}
