import ContactFormModal from "./contact-form";

export default function SiteFooter() {
    return (
        <div id="site-footer-wrap" className="bg-gray-200 border-t border-gray-300 dark:border-gray-700 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
            <footer id="site-footer" role="contentinfo" className="sm:flex sm:flex-row max-w-4xl mx-auto p-4 sm:px-6 lg:px-8 mt-4 py-10">
                <div className="sm:w-1/2 text-center sm:text-start p-4">
                    <h2 className="text-2xl font-bold mb-4">Contact me</h2>
                    <ContactFormModal id="contact-form-button" />
                </div>
                <div id="site-footer-inner" className="sm:w-1/2 p-4 text-center sm:text-end">
                    <p className="mb-2">&copy; 2025 Alden Gillespy</p>
                    <p className="mb-2">Made with love in the breathtaking Silicon Slopes of beautiful Salt Lake City, Utah, United States.</p>
                    <p className="mb-2 text-sm">version 0.1.2</p>
                </div>
            </footer>
        </div>
    )
}