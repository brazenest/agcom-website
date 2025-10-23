"use client";

import React from "react";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Building Scalable Frontends with React and Next.js",
      excerpt:
        "A practical guide to structuring your Next.js projects for long-term maintainability and performance.",
      date: "October 12, 2025",
      readTime: "6 min read",
      slug: "scalable-nextjs-frontends",
    },
    {
      title: "How I Designed My Personal Portfolio System",
      excerpt:
        "A behind-the-scenes look at the design system, style guide, and visual language behind this website.",
      date: "October 18, 2025",
      readTime: "4 min read",
      slug: "portfolio-style-system",
    },
    {
      title: "Optimizing Developer Productivity in Full-Stack Projects",
      excerpt:
        "Balancing clarity and speed when working across frontend and backend systems using modern frameworks.",
      date: "October 5, 2025",
      readTime: "5 min read",
      slug: "developer-productivity",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-gray-800">
      {/* Hero / Header */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Blog</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Thoughts, tutorials, and insights from my work as a full-stack
          engineer — from frontend design systems to backend architecture.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        </div>
      </section>
    </main>
  );
}
