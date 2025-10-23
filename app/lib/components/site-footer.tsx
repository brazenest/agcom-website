import { SITE_VERSION } from "../constants";

export default function SiteFooter() {
    return (
        <div id="site-footer-wrap" className="bg-gray-200 border-t border-gray-300 dark:border-gray-700 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
            <footer id="site-footer" role="contentinfo" className="p-4 sm:px-6 lg:px-8 mt-4 py-8">
                <div id="site-footer-inner" className="p-4 text-center">
                    <p className="mb-2">&copy; 2025 Alden Gillespy</p>
                    <p className="mb-4">Building clean, reliable, user-friendly web experiences</p>
                    <p className="mb-2">Made with love in the breathtaking Silicon Slopes of beautiful Salt Lake City, Utah, United States.</p>
                    <p className="mb-2 text-sm">version {SITE_VERSION}</p>
                </div>
            </footer>
        </div>
    )
}