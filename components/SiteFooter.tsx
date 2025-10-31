import Link from "next/link";
import { SITE_VERSION } from "@/lib/constants";

export default function SiteFooter() {
    return (
        <footer id="site-footer" role="contentinfo">
            <div id="site-footer-inner" className="max-w-7xl mx-auto px-6 py-12 text-center">
                <p className="mb-5">
                    &copy; {new Date().getFullYear()} Alden Gillespy
                </p>
                <p className="mb-3 text-sm">
                    Building clean, reliable, user-friendly web experiences
                </p>
                <p className="mb-2 text-sm">
                    Made with love in the
                    <Link
                        href="https://en.wikipedia.org/wiki/Silicon_Slopes"
                        target="_blank"
                    >
                        Silicon Slopes
                    </Link>
                    of the
                    <Link
                        href="https://en.wikipedia.org/wiki/Wasatch_Front"
                        target="_blank"
                    >
                        Wasatch Front
                    </Link>
                    and beautiful
                    <Link
                        href="https://en.wikipedia.org/wiki/Salt_Lake_City"
                        target="_blank"
                    >
                        Salt Lake City, Utah, United States
                    </Link>
                    .
                </p>
                <p className="text-xs">version {SITE_VERSION}</p>
            </div>

        </footer>

    )
}