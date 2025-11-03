import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

const projects = [
  {
    title: "DNA Kit Activation Flow",
    description: "React + Node.js full-stack web experience for consumer onboarding.",
    category: "engineering",
    href: "/projects/dna-kit",
  },
  {
    title: "Bellagio Fountains at Sunset",
    description: "Cinematic water choreography filmed and produced for SHADOWCATpictures.",
    category: "cinematic",
    href: "https://youtube.com/c/SHADOWCATpictures",
  },
  {
    title: "Hybrid Portfolio Platform",
    description: "Next.js + TailwindCSS redesign merging tech and cinematic identity.",
    category: "hybrid",
    href: "/projects/portfolio",
  },
];

export default function HomePage() {

  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturedWork />
      <BlogSection />
      <ContactSection />
    </main>
  );
}
