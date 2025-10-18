import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "./lib/components/site-header";
import SiteFooter from "./lib/components/site-footer";

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ["latin"],
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
        className={`${openSans.variable} antialiased`}
      >
         <SiteHeader />
        <div className="font-sans">
          <main id="site" className="px-4">
              {children}
          </main>
        </div>
        <SiteFooter />
      </body>
    </html >
  );
}
