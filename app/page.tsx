import SiteIndexHero from "@/components/SiteIndexHero";
import SiteNavbar from "@/components/site/SiteNavbar";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <SiteNavbar />
      <SiteIndexHero />
      <IntroSection />
      <FeaturedWorkSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
