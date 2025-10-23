import type { Metadata } from "next";
import { Open_Sans, Noto_Sans, IBM_Plex_Sans, Karla } from "next/font/google";
import "./globals.css";
import SiteHeader from "./lib/components/site/site-header";
import SiteFooter from "./lib/components/site/site-footer";

const sansFont = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alden Gillespy - Software Engineer, Video Editor, Photographer, Videographer",
  description: "I am a super human with 5+ years experience in software engineering and video production roles, currently living in Salt Lake City, Utah, United States. I'm also a keen photographer of landscapes, candids, and architecture. Finally, I have a strong interest in city planning as a participant in the Cities Skylines game franchise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="root" lang="en">
      <body
        id="site"
        className={`${sansFont.variable} antialiased`}
      >
        <SiteHeader />
        <div id="site-content" className="font-sans max-w-7xl mx-auto pt-16">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html >
  );
}
