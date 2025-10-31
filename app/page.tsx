import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedWork from "@/components/home-page/FeaturedWork";
import Hero from "@/components/Hero";

export default async function HomePage() {
    return (
        <main>
            <Hero />
            <FeaturedWork />
            <About />
            <Contact />
        </main>
    );
}
