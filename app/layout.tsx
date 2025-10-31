import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./style-guide.css";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ThemeProvider from "@/components/ThemeProvider";

const fontTech = Inter({
  variable: '--font-tech',
  subsets: ["latin"],
})

const fontCinema = Space_Grotesk({
  variable: '--font-cinema',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alden Gillespy - Software Engineer, Video Editor, Photographer",
  description: "I am a super human with 5+ years experience in software engineering and video production roles, currently living in Salt Lake City, Utah, United States. I'm also a keen photographer of landscapes, candids, and architecture. Finally, I have a strong interest in city planning as a participant in the Cities Skylines game franchise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="root" lang="en" suppressHydrationWarning>
      <body
        id="site"
        className={`${fontTech.variable} ${fontCinema.variable} antialiased`}
      >
        <ThemeProvider>
          <SiteHeader />
          <div id="site-content-wrap">
            <main className="min-h-screen max-w-7xl mx-auto bg-[var(--color-bg)] text-[var(--color-text)] font-sans transition-colors duration-300">
              {children}
            </main>
            {/* Gradient side strip */}
            <div className="fixed top-0 left-0 bottom-0 w-4 md:w-4 h-full bg-gradient-to-b from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] opacity-80" />
            <div className="fixed top-0 right-0 bottom-0 w-4 md:w-4 h-full bg-gradient-to-b from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] opacity-80" />
            {/* Cinematic gradient footer accent */}
            <div className="bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)]" />
          </div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html >
  );
}
