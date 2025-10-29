import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./lib/components/site/site-header";
import SiteFooter from "./lib/components/site/site-footer";
import ThemeProvider from "./lib/components/ThemeProvider";
import ThemeTransitionOverlay from "./lib/components/ThemeTransitionOverlay";

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
          <div id="site-content" className="max-w-7xl mx-auto">
            {children}
          </div>
          <SiteFooter />
          <ThemeTransitionOverlay />
        </ThemeProvider>
      </body>
    </html >
  );
}
