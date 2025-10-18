import type { Metadata } from "next";
import { Open_Sans, Noto_Sans, IBM_Plex_Sans, Karla } from "next/font/google";
import "./globals.css";
import SiteHeader from "./lib/components/site-header";
import SiteFooter from "./lib/components/site-footer";

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
    <html lang="en">
      <body
        className={`${sansFont.variable} antialiased`}
      >
         <SiteHeader />
        <div className="font-sans">
          <main id="site" className="px-4 max-w-7xl mx-auto">
              {children}
          </main>
        </div>
        <SiteFooter />
      </body>
    </html >
  );
}
