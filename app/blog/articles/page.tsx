import Navbar from "@/components/SiteNavbar";
import Link from "next/link";

const posts = [
  {
    title: "Designing a Cinematic Developer Portfolio",
    excerpt:
      "How to merge the precision of engineering with the emotional resonance of film — the philosophy behind my site’s latest redesign.",
    date: "October 30, 2025",
    href: "/blog/cinematic-portfolio",
  },
  {
    title: "React and Visual Storytelling",
    excerpt:
      "Exploring component-driven design as a medium for narrative — why interfaces should feel directed, not assembled.",
    date: "October 10, 2025",
    href: "/blog/react-storytelling",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-24">
        {/* Ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(58,167,255,0.05),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(255,156,74,0.05),transparent_60%)] pointer-events-none" />

        <h1 className="font-cinema text-4xl mb-8 text-gradient">Blog</h1>

        <div className="grid gap-10">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="card block hover:bg-[var(--color-surface-alt)] transition-colors"
            >
              <h2 className="font-cinema text-2xl mb-2">{post.title}</h2>
              <p className="font-engineering text-[var(--color-text-secondary)] mb-4">{post.excerpt}</p>
              <p className="font-engineering text-xs text-[var(--color-text-secondary)]">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
