import Link from "next/link";
import { SITE_VERSION } from "@/lib/constants";

export default function SiteFooter() {
    return (
        <footer id="site-footer" role="contentinfo" className="py-16 px-6 text-center border-t" style={{
                background: "var(--footer-surface)",
                borderColor: "var(--nav-border)",
                color: "var(--footer-text)",
            }}>
            <div id="site-footer-inner" className="max-w-6xl mx-auto px-6 py-12 text-center">

                <h3 className="font-space-grotesk text-2xl font-semibold mb-4">
                    Let’s Build Something Great
                </h3>
                <p className="font-inter text-sm mb-8 text-[var(--footer-subtext)]">
                    Engineering + Cinematic Storytelling — united by design.
                </p>

                <div className="flex justify-center space-x-6 text-sm">
                    <a
                        href="/about"
                        className="hover:text-[var(--color-accent-amber)] transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="/work"
                        className="hover:text-[var(--color-accent-amber)] transition-colors"
                    >
                        Work
                    </a>
                    <a
                        href="/blog"
                        className="hover:text-[var(--color-accent-amber)] transition-colors"
                    >
                        Blog
                    </a>
                    <a
                        href="mailto:ag@aldengillespy.com"
                        className="hover:text-[var(--color-accent-amber)] transition-colors"
                    >
                        Contact
                    </a>
                </div>

                <p className="mb-5">
                    &copy; {new Date().getFullYear()} Alden Gillespy
                </p>
                <p className="mb-3 text-sm">
                    Building clean, reliable, user-friendly web experiences
                </p>
                <p className="mb-2 text-sm">
                    Made with love in the <Link href="https://en.wikipedia.org/wiki/Silicon_Slopes" target="_blank">Silicon Slopes</Link> of the <Link href="https://en.wikipedia.org/wiki/Wasatch_Front" target="_blank">Wasatch Front</Link> and beautiful <Link href="https://en.wikipedia.org/wiki/Salt_Lake_City" target="_blank">Salt Lake City, Utah, United States</Link>.
                </p>
                <p className="text-xs">version {SITE_VERSION}</p>
            </div>

        </footer>

    )
}
