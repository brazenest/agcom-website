import ContactFormModal from "./contact-form";

export default function SiteFooter() {
    return (
        <div id="site-footer-wrap" className="bg-gray-100 mt-4 py-8">
            <footer id="site-footer" role="contentinfo" className="flex flex-row max-w-4xl mx-auto p-4 sm:px-6 lg:px-8 my-10 text-gray-700">
                <div className="w-1/2 pr-4">
                    <h2 className="text-2xl font-bold mb-4">Contact me</h2>
                    <ContactFormModal id="contact-form-button" />
                </div>
                <div id="site-footer-inner" className="w-1/2 pl-4 text-right">
                    <p className="mb-2">&copy; 2025 Alden Gillespy</p>
                    <p className="mb-2">Made with love in the breathtaking Silicon Slopes of beautiful Salt Lake City, Utah, United States.</p>
                </div>
            </footer>
        </div>

    )
}