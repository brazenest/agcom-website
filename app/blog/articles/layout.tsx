import { BlogHeading } from "@/app/lib/components/blog-heading";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
          <BlogHeading>Alden Gillespy&apos;s Blog</BlogHeading>
            {children}
        </div>
    )
}