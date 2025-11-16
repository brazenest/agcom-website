import type { Metadata } from "next";
import 'dotenv/config'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Space_Grotesk, Inter } from "next/font/google";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LinkT } from "@/types/link";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SectionProvider } from "@/components/providers/SectionProvider";
import { BackgroundTint } from "@/components/site/BackgroundTint";
import { FilmGrain } from "@/components/site/FilmGrain";
import { ParallaxLights } from "@/components/site/ParallaxLights";
import { BloomOverlay } from "@/components/site/BloomOverlay";
import { Vignette } from "@/components/site/Vignette";

const fontTech = Inter({
  variable: '--font-tech',
  subsets: ["latin"],
})

const fontCinema = Space_Grotesk({
  variable: '--font-cinema',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alden Gillespy — Full-Stack Software Engineer, Web Designer & Video Producer",
  description: "Full-stack software engineer, web designer, and video producer blending product-grade engineering with cinematic storytelling for modern digital experiences.",
  icons: {
    icon: [
      { url: '/assets/images/favicons/favicon-color.ico', media: '(prefers-color-scheme: light)' },
      { url: '/assets/images/favicons/favicon.ico', media: '(prefers-color-scheme: dark)' },
    ],
  },
  metadataBase: new URL("https://aldengillespy.com"),
  keywords: [
    "Software Engineer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Web Design",
    "Video Production",
    "Cinematic Storytelling",
    "Design Systems",
  ],
  openGraph: {
    title: "Alden Gillespy — Full-Stack Software Engineer, Web Designer & Video Producer",
    description:
      "Full-stack engineering meets cinematic storytelling — portfolio, case studies, and articles.",
    url: "https://aldengillespy.com",
    type: "website",
  },
};

const footerLinks: LinkT[] = [
  {
    href: '/',
    content: 'Home',
  },
  {
    href: '/#work',
    content: 'Work',
  },
  {
    href: '/blog',
    content: 'Blog', 
  },
  {
    href: '/about',
    content: 'About',
  },
  { href: 'mailto:ag@aldengillespy.com',
    content: 'Contact',
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="root" lang="en" suppressHydrationWarning>
      <body
        id="site"
        className={`${fontTech.variable} ${fontCinema.variable} antialiased bg-background dark:bg-backgroundDark text-text dark:text-dark-text`}
      >
        
        <SectionProvider>

          {/* Cinematic layers, order from farthest back to front */}
          <BackgroundTint />
          {/* <ScrollMotionBlur /> */}
          <FilmGrain />
          <ParallaxLights />
          {/* <CinematicGrade /> */}
          <BloomOverlay />
          <Vignette />
          
          {/* UI overlays */}
          <ScrollProgress />

          {/* Header */}
          <SiteHeader />

          {/* Content */}
          <div id="site-content-wrap" className="min-h-screen">
            {children}
          </div>

          {/* Footer */}
          <SiteFooter links={footerLinks} />

        </SectionProvider>

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!} />
      </body>
    </html >
  );
}
