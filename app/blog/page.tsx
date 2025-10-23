export default function BlogPage() {
  const posts: BlogArticleModel[] = []

  return (
    <main id="page-content" className="flex flex-col min-h-screen text-gray-900">
      {/* ===== Blog Grid ===== */}
      <section className="px-6 sm:px-12 lg:px-24 py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">Latest Posts</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/articles/${post.slug}`}
              className="group block bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8 border border-gray-100"
            >
              <div className="text-sm text-gray-500 mb-3">
                {post.date} • {post.primaryTag} • {post.readTime}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-3 leading-relaxed">{post.excerpt}</p>
              <div className="mt-5 text-blue-600 font-medium group-hover:text-pink-500 transition-colors">
                Read more →
              </div>
            </Link>
          ))}

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
      
    </main>
  );
}