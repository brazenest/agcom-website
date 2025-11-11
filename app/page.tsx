import SiteIndexHero from "@/components/SiteIndexHero";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <SiteIndexHero />
      <IntroSection />
      <FeaturedWorkSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
