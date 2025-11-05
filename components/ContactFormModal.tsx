"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";

export default function ContactFormModal({ id, buttonText = "Contact Me", buttonClassName }: ContactFormProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({ name, email, message }),
                headers: { "Content-Type": "application/json" },
            });

            const responseData = await res.json();
            console.log("Contact form submitted! responseData:", responseData);

            setSuccess(true);
            setIsSubmitting(false);

            // clear fields
            setName("");
            setEmail("");
            setMessage("");

            // auto-close after a short delay so user sees success
            setTimeout(() => {
                setSuccess(false);
                closeModal();
            }, 1400);
        } catch (err) {
            console.error("Contact form submission Error:", err);
            setError("There was a problem submitting the form. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact-form-modal-wrap" className="text-gray-900">
            <button
                onClick={openModal}
                className={buttonClassName ?? "p-4 m-4 rounded-lg bg-green-500 text-white hover:bg-green-600"}
                aria-label={buttonText}
            >
                {buttonText}
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1 id="modal-heading" className="text-2xl font-bold mb-4">
                    Contact Me
                </h1>
                <hr className="my-4" />

                {success ? (
                    <div className="p-4 rounded bg-green-50 text-green-800">Thanks — your message was sent.</div>
                ) : (
                    <form id={id} className="contact-form flex flex-col" onSubmit={handleSubmit} autoComplete="on">
                        <label htmlFor="name" className="mt-2">
                            Your name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="border rounded p-2 my-2"
                            placeholder="ex. John Smith"
                            autoFocus
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="email" className="mt-2">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="border rounded p-2 my-2"
                            placeholder="ex. you@domain.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="message" className="mt-2">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="border rounded p-2 my-2"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="my-1 bg-blue-500 text-white hover:bg-blue-600 rounded-lg p-4 flex items-center justify-center"
                        >
                            {isSubmitting ? (
                                <span className="inline-flex items-center gap-2">
                                    <span className="spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full" aria-hidden />
                                    Sending...
                                </span>
                            ) : (
                                "Send your message"
                            )}
                        </button>
                    </form>
                )}
            </Modal>
        </div>
    );
}

type ContactFormProps = {
    id: string;
    buttonText?: string;
    buttonClassName?: string;
};
