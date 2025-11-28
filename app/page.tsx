export const dynamic = "force-dynamic";

import { Page } from "@/components/ui/Page";
import { HomeHero } from "@/components/zones/home/HomeHero";
import { HomeFeaturedWorkSection } from "@/components/zones/home/HomeFeaturedWorkSection";
import { HomeContactSection } from "@/components/zones/home/HomeContactSection";
import { HomeCoreRolesSection } from "@/components/zones/home/HomeCoreRolesSection";
import { HomeWhatIDoSection } from "@/components/zones/home/HomeWhatIDoSection";
import { BlogArticlesSection } from "@/components/zones/blog/BlogArticlesSection";

import { getArticlesFromDB } from "@/functions/getArticlesFromDB";

import type { ArticleT } from "@/types/blog";
import HomeIntroSection from "@/components/zones/home/HomeIntroSection";

export default async function HomePage() {
	const articles: ArticleT[] = await getArticlesFromDB({});

	return (
		<Page id="home">
			{/* Spotlight hero */}
			<HomeHero />

			<HomeIntroSection />

			{/* Core roles / pillars (keep this as the single “who I am” grid) */}
			<HomeCoreRolesSection />

			{/* [Optional] “what I do” philosophy / story (later: make this more prose-like) */}
			<HomeWhatIDoSection />

			{/* Featured work – visual gallery / cards */}
			<HomeFeaturedWorkSection />

			{/* Latest writing / thinking */}
			<BlogArticlesSection articles={articles} />

			{/* Full-bleed CTA band */}
			<HomeContactSection />
		</Page>
	);
}

