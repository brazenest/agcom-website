import { BlogPageBanner } from "@/app/lib/components/blog/blog-page-banner";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="blog-area">
      {/* ===== Blog Hero ===== */}
      <BlogPageBanner />
      <div id="content" className="md:flex lg:max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}