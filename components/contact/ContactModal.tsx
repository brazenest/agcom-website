"use client";

import { useState, useEffect } from "react";

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "fail">("idle");
    const [showToast, setShowToast] = useState(false);

    // Prevent background scroll while modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Auto-hide success toast after 3 seconds
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setIsOpen(false);
                setShowToast(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Failed to send");
            }
        } catch (err) {
            console.error(err);
            setStatus("fail");
        }
    }

    return (
        <>
            {/* Contact button */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Contact Me
            </button>

            {/* Modal overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-neutral-900 border border-[var(--color-divider)] rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                className="w-full p-2 border border-gray-300 dark:border-neutral-700 rounded"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-60"
                            >
                                {status === "loading" ? "Sending..." : "Submit"}
                            </button>

                            {status === "fail" && (
                                <p className="text-center text-red-600 text-sm">
                                    Failed to send. Please revise your input and try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            )}

            {/* Toast message */}
            {showToast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg z-50">
                    Message sent successfully!
                </div>
            )}
        </>
    );
}
