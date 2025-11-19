export const dynamic = "force-dynamic";

import HomeHero from "@/components/zones/home/HomeHero";
import HomeIntroSection from "@/components/zones/home/HomeIntroSection";
import HomeFeaturedWorkSection from "@/components/zones/home/HomeFeaturedWorkSection";
import HomeBlogSection from "@/components/zones/home/HomeBlogSection";
import HomeContactSection from "@/components/zones/home/HomeContactSection";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeIntroSection />
      <HomeFeaturedWorkSection />
      <HomeBlogSection />
      <HomeContactSection />
    </main>
  );
}
