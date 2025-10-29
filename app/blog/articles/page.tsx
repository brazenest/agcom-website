import { BlogArticleT } from "../../lib/types/blog";
import { displayDate } from "../../lib/functions/display-date";
import { getArticles } from "../../lib/functions/get-articles";

export default async function BlogPage() {
  const posts: BlogArticleT[] = await getArticles()

  return (
    <main id="page-content" className="flex flex-col min-h-screen text-gray-900">
      {/* ===== Blog Grid ===== */}
      <section className="px-6 sm:px-12 lg:px-24 py-32 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">Latest Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <article key={post.slug} id={`article-${post.id}--${post.slug}`} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition text-left">
                  <div className="mb-4 text-sm text-gray-500">{displayDate(post.datePublished as string)} • {post.readtime}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/articles/${post.slug}`}
                    className="text-blue-500 font-semibold hover:text-purple-500 transition"
                  >
                    Read more →
                  </a>
                </article>
            ))}
          </div>
        </div>
      </section >

      {/* ===== CTA Section ===== */}
      < section className="px-6 sm:px-12 lg:px-24 py-32 bg-[#EDF1F5] text-center text-gray-700" >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Join the Conversation</h2>
          <p className="text-lg leading-relaxed mb-8">
            I write about modern web development, design systems, and lessons learned along the way.
            Subscribe or reach out if you’d like to chat about ideas or collaborate.
          </p>
          <a
            href="mailto:hello@aldengillespy.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-purple-500 transition"
          >
            Say Hello
          </a>
        </div>
      </section >

      {/* ===== Footer ===== */}

    </main >
  );
}