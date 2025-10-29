import FeaturedWorkSection from "./lib/components/home-page/FeaturedWorkSection";
import Hero from "./lib/components/home-page/Hero";

export default async function HomePage() {
    return (
        <main>
            {/* ===== Hero ===== */}
            <Hero />

            {/* ===== Featured Work Section ===== */}
            <FeaturedWorkSection />

            {/* ===== CTA Section ===== */}
            <section className="px-6 sm:px-12 lg:px-24 py-32 bg-[#EDF1F5] text-center text-gray-700">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-900">Join the Conversation</h2>
                    <p className="text-lg leading-relaxed mb-8">
                        I write about modern web development, design systems, and lessons learned along the way.
                        Subscribe or reach out if you’d like to chat about ideas or collaborate.
                    </p>
                    <a
                        href="mailto:hello@aldengillespy.dev"
                        className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-purple-500 transition"
                    >
                        Say Hello
                    </a>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <footer className="px-6 sm:px-12 lg:px-24 py-12 bg-gray-900 text-gray-300 text-center text-sm">
                © {new Date().getFullYear()} Alden Gillespy — Built with Next.js & Tailwind CSS
            </footer>
        </main>
    );
}
