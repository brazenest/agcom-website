import { BlogHeading } from "@/app/lib/components/blog-heading";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BlogHeading><a href="/blog">Alden Gillespy&apos;s Blog</a></BlogHeading>
      <div className="md:flex md:max-w-3xl lg:max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}