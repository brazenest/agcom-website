export const dynamic = "force-dynamic"; 

import HomeHero from "@/components/HomeHero";
import HomeIntroSection from "@/components/HomeIntroSection";
import HomeFeaturedWorkSection from "@/components/HomeFeaturedWorkSection";
import HomeBlogSection from "@/components/HomeBlogSection";
import HomeContactSection from "@/components/HomeContactSection";

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
