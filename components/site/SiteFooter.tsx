import { SITE_VERSION } from "../../app/lib/functions/constants";

export default function SiteFooter() {
    return (
        <footer id="site-footer" role="contentinfo" className="max-w-7xl mx-auto px-6 py-12 bg-gray-900 text-gray-300">
            <p className="mb-5">© {new Date().getFullYear()} Alden Gillespy</p>
            <p className="mb-3 text-sm">Building clean, reliable, user-friendly web experiences</p>
            <p className="mb-2 text-sm">Made with love in the Silicon Slopes of the Wasatch Valley and beautiful Salt Lake City, Utah, United States.</p>
            <p className="text-xs">version {SITE_VERSION}</p>
        </footer>

    )
}