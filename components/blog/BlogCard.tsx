"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCard({ post, delay }: any) {
  const gradientClass =
    post.category?.toLowerCase() === "cinematic"
      ? "gradient-cinema"
      : "gradient-tech";

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${gradientClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-black/10 dark:group-hover:bg-black/20" />

      <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white space-y-3">
        <h3 className="font-space-grotesk text-2xl font-semibold drop-shadow-md group-hover:underline decoration-white/40">
          <Link href={`/blog/articles/${post.slug}`}>{post.title}</Link>
        </h3>

        {post.excerpt && (
          <p className="text-sm text-white/90 line-clamp-3">{post.excerpt}</p>
        )}

        <div className="flex items-center justify-between text-white/70 text-xs uppercase tracking-wide mt-2">
          <span>
            {new Date(post.date).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {post.category && (
            <span className="text-white/60 font-medium">{post.category}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
