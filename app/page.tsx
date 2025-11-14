import HomeHero from "@/components/home/HomeHero";
import HomeIntroSection from "@/components/home/HomeIntroSection";
import HomeFeaturedWorkSection from "@/components/home/HomeFeaturedWorkSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import HomeContactSection from "@/components/home/HomeContactSection";


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
