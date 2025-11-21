export const dynamic = "force-dynamic";

import { HomeHero } from "@/components/zones/home/HomeHero";
import { HomeIntroSection } from "@/components/zones/home/HomeIntroSection";
import { HomeFeaturedWorkSection } from "@/components/zones/home/HomeFeaturedWorkSection";
import { HomeContactSection } from "@/components/zones/home/HomeContactSection";
import { HomeCoreRolesSection } from "@/components/zones/home/HomeCoreRolesSection";
import { HomeWhatIDoSection } from "@/components/zones/home/HomeWhatIDoSection";
import { BlogArticlesSection } from "@/components/zones/blog/BlogArticlesSection";
import { getArticlesFromDB } from "@/functions/getArticlesFromDB";
import { ArticleT } from "@/types/blog";

export default async function HomePage() {
	const articles: ArticleT[] = await getArticlesFromDB({})

	return (
		<main>
			<HomeHero />
			<HomeIntroSection />
			<HomeCoreRolesSection />
			<HomeWhatIDoSection />
			<HomeFeaturedWorkSection />
			<BlogArticlesSection articles={articles} />
			<HomeContactSection />
		</main>
	);
}
