import About from "./lib/components/About";
import Contact from "./lib/components/Contact";
import FeaturedWork from "./lib/components/home-page/FeaturedWork";
import Hero from "./lib/components/Hero";

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
