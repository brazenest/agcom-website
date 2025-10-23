import { getArticles } from "./lib/get-articles";

export default async function Blog() {
    const articles = await getArticles()

    return (
        <main className="flex flex-col min-h-screen text-gray-900">
            {/* ===== Blog Hero ===== */}
            <section className="relative flex flex-col items-center justify-center text-center min-h-[50vh] px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
                    <p className="text-lg md:text-xl leading-relaxed mb-6">
                        Thoughts on software engineering, clean code, design systems, and the occasional experiment.
                    </p>
                </div>
            </section>

            {/* ===== Blog Grid ===== */}
            <section className="px-6 sm:px-12 lg:px-24 py-32 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">Latest Posts</h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Example Post 1 */}
                        <article className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition text-left">
                            <div className="mb-4 text-sm text-gray-500">September 2025 • Engineering</div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                Building Reusable React Components That Scale
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed mb-4">
                                How to design and structure React components that stay maintainable as your app grows — with real examples.
                            </p>
                            <a
                                href="/blog/reusable-react-components"
                                className="text-blue-500 font-semibold hover:text-purple-500 transition"
                            >
                                Read more →
                            </a>
                        </article>

                        {/* Example Post 2 */}
                        <article className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition text-left">
                            <div className="mb-4 text-sm text-gray-500">August 2025 • Design Systems</div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                Designing a Consistent Front-End Style Guide
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed mb-4">
                                A look at how modular design tokens and spacing scales can bring order and harmony to your UI projects.
                            </p>
                            <a
                                href="/blog/front-end-style-guide"
                                className="text-blue-500 font-semibold hover:text-purple-500 transition"
                            >
                                Read more →
                            </a>
                        </article>

                        {/* Example Post 3 */}
                        <article className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition text-left">
                            <div className="mb-4 text-sm text-gray-500">July 2025 • Personal</div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                Lessons from Reentering Tech After a Break
                            </h3>
                            <p className="text-base text-gray-700 leading-relaxed mb-4">
                                What I learned about staying sharp, rebuilding confidence, and finding balance while returning to software engineering.
                            </p>
                            <a
                                href="/blog/reentering-tech"
                                className="text-blue-500 font-semibold hover:text-purple-500 transition"
                            >
                                Read more →
                            </a>
                        </article>
                    </div>
                </div>
            </section>

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
