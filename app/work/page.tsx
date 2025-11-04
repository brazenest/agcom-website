import PageHero from "@/components/layouts/PageHero";
import PageSection from "@/components/layouts/PageSection";
import PageGrid from "@/components/layouts/PageGrid";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import FeaturedWorkGrid from "@/components/work/FeaturedWorkGrid";

export default function FeaturedWorkPage() {
  const projects = [
    {
      title: "DNA Activation Platform",
      description: "A high-performance React platform powering consumer DNA kit activations at scale.",
      category: "engineering",
      href: "/work/dna-activation",
    },
    {
      title: "Cinematic Showreel",
      description: "A curated reel blending technology, motion, and storytelling through light and rhythm.",
      category: "cinematic",
      href: "/work/showreel",
    },
    {
      title: "Lens Data Engine",
      description: "A camera metadata API for visual production tools — built for speed and creative automation.",
      category: "engineering",
      href: "/work/lens-data",
    },
    {
      title: "Shadowcat Visual",
      description: "Hybrid experimental film series blending software visuals and cinematic motion.",
      category: "hybrid",
      href: "/work/shadowcat",
    },
  ];

    return (
        <>
            <PageHero
                title="Featured Work"
                subtitle="Selected engineering and cinematic projects designed for performance and emotion."
                variant="tech"
            />

            <PageSection background="alt">
                <FeaturedWorkGrid projects={projects} />
            </PageSection>
        </>
    );
}
