import 'dotenv/config'
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SiteFooterSocialIconsBar } from "./SiteFooterSocialIconsBar";

export const SiteFooter = ({ links }) => (
	<footer className="relative mt-32 border-t border-border dark:border-dark-border">

		<Section
			title="Alden Gillespy"
			subtitle="Engineering + Cinematic Storytelling"
			className="py-16 text-center bg-surface dark:bg-dark-surface"
		>

			<div className="flex justify-center gap-6 text-sm font-engineering">
				{links.map(({ href, content }) => (
					<FooterLink key={href} href={href}>
						{content}
					</FooterLink>
				))}
			</div>

			<SiteFooterSocialIconsBar className="mt-10" />

			<p className="mt-10 text-xs text-text-secondary dark:text-dark-text-secondary font-engineering">
        © {new Date().getFullYear()} Alden Gillespy. All rights reserved.
			</p>
			<p className="mt-4 text-xs text-text-secondary dark:text-dark-text-secondary font-engineering">
        version {process.env.NEXT_PUBLIC_SITE_VERSION}
			</p>
		</Section>
	</footer>
)

const FooterLink = ({ href, children }) => (
	<Link
		href={href}
		className="text-text dark:text-dark-text hover:text-brand-500 dark:hover:text-dark-brand-500 transition-colors"
	>
		{children}
	</Link>
);
