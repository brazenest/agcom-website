import 'dotenv/config'
import Link from "next/link";
import { Section } from "@/components/newton/layout/Section";
import { SiteFooterSocialIconsBar } from "./SiteFooterSocialIconsBar";

export const SiteFooter = ({ links }) => (
	<footer id="site-footer" className="relative" role="contentinfo">

		<Section id="site-footer-section"
		>
			<div className="space-y-10">
				<div className="flex justify-center gap-6 text-sm font-engineering">
					{links.map(({ href, content }) => (
						<FooterLink key={href} href={href}>
							{content}
						</FooterLink>
					))}
				</div>

				<SiteFooterSocialIconsBar />

<div className="colophon text-center">
					<p className="text-xs text-text-secondary dark:text-dark-text-secondary font-engineering">
						© {new Date().getFullYear()} Alden Gillespy. All rights reserved.
					</p>
					<p className="text-xs text-text-secondary dark:text-dark-text-secondary font-engineering">
						version {process.env.NEXT_PUBLIC_SITE_VERSION}
					</p>
	</div>

			</div>

		</Section>
	</footer>
)

const FooterLink = ({ href, children }) => (
	<Link
		href={href}
		className="no-underline cursor-pointer transition-colors"
	>
		{children}
	</Link>
);
