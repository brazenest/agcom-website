'use client'
import { useState } from "react"
import { Modal } from "./Modal";

export default function ContactFormModal({ id, buttonText = 'Contact Me' }: ContactFormProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const responseData = await res.json()

            // Log the contact form submission
            console.log('Contact form submitted! responseData:', responseData)

            e.target.reset()
            closeModal()
        } catch (err) {
            console.error('Contact form submission Error:', err)
        }
    }

    return (
        <div id="contact-form-modal-wrap" className="text-gray-900">
            <button
                onClick={openModal}
                className="p-4 m-4 rounded-lg bg-green-500 text-white hover:bg-green-600"
            >
                {buttonText}
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
                <hr className="my-4" />
                <form id={id} className="contact-form flex flex-col" onSubmit={handleSubmit} autoComplete="on">
                    <label htmlFor="name" className="mt-2">Your name</label>
                    <input
                        type="text"
                        name="name"
                        className="border rounded p-2 my-2"
                        placeholder="ex. John Smith"
                        autoFocus
                        required
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="email" className="mt-2">Email address</label>
                    <input
                        type="text"
                        name="email"
                        className="border rounded p-2 my-2"
                        placeholder="ex. you@domain.com"
                        pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+"
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="message" className="mt-2">Your message</label>
                    <textarea
                        name="message"
                        className="border rounded p-2 my-2"
                        required
                        onChange={e => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className="my-1 bg-blue-500 text-white hover:bg-blue-600 rounded-lg p-4">Send your message</button>
                </form>
            </Modal>
        </div>


    )
}

type ContactFormProps = {
    id: string,
    buttonText?: string,
}
