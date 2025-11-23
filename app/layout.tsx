import type { Metadata } from "next";
import 'dotenv/config'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Space_Grotesk, Inter } from "next/font/google";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LinkT } from "@/types/link";
import { SectionProvider } from "@/components/providers/SectionProvider";
import ContactModal from "@/components/zones/contact/ContactModal";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
	{
		href: 'mailto:ag@aldengillespy.com',
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

			<head>
				<style
					dangerouslySetInnerHTML={{
						__html: `
			:root {
				color-scheme: light dark;
			}
			[data-theme="light"] {
				color-scheme: light;
			}
			[data-theme="dark"] {
				color-scheme: dark;
			}

			/* Theme initializer */
			html {
				--tmp-theme: light;
			}
			@media (prefers-color-scheme: dark) {
				html {
					--tmp-theme: dark;
				}
			}
			html[data-theme] {
				--tmp-theme: initial;
			}
		`,
					}}
				/>

				<script
					id="theme-init"
					async
					dangerouslySetInnerHTML={{
						__html: `
			(function() {
				try {
					const stored = localStorage.getItem('theme');
					if (stored) {
						document.documentElement.dataset.theme = stored;
					} else {
						const media = window.matchMedia('(prefers-color-scheme: dark)');
						if (media.matches) document.documentElement.dataset.theme = 'dark';
						else document.documentElement.dataset.theme = 'light';
					}
				} catch (_) {}
			})();
		`,
					}}
				/>
			</head>

			{/* The BODY tag and page content */}

			<body
				id="site"
				className={`${fontTech.variable} ${fontCinema.variable} antialiased bg-background dark:bg-backgroundDark text-text dark:text-dark-text`}
			>

				<ThemeProvider>
					<SectionProvider>

						{/* Header */}
						<SiteHeader />

						{/* Content */}
						<div id="site-content-wrap" className="min-h-screen">
							{children}
						</div>

						{/* Footer */}
						<SiteFooter links={footerLinks} />

					</SectionProvider>

					<ContactModal />  {/* Mount ONCE here */}
				</ThemeProvider>

				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID!} />

			</body>
		</html >
	);
}
