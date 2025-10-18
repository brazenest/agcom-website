export default function BlogAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <h1 className="text-lg">Blog Administration</h1>
            {children}
        </div>
    )
}