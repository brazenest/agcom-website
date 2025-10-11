export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>Alden Gillespy&apos;s Blog</h1>
            {children}
        </div>
    )
}