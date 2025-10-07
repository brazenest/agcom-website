'use client'
import { useState } from "react"
import { Modal } from "./modal";

export default function ContactFormModal({ id }: ContactFormProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const dataDiv = document.getElementById('contact-form-data') as HTMLElement
        dataDiv.innerHTML = ''
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
            e.target.reset()
            dataDiv.innerHTML = responseData

        } catch (err: any) {
            console.error('Error:', err)
        }
    }

    return (
        <div id="contact-form-modal-wrap" className="text-gray-900">
            <button
                onClick={openModal}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Send me a message!
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
                <hr className="my-4" />
                <p className="mb-4">I'd love to hear from you! Whether you have a question about my experience, want to discuss potential collaboration opportunities, or just want to say hello, feel free to reach out. I'm always open to connecting with fellow professionals, recruiters, and anyone interested in the tech industry. Please fill out the contact form below, and I will get back to you as soon as possible. Looking forward to hearing from you!</p>
                <form id={id} className="contact-form flex flex-col" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="mt-2">Your name</label>
                    <input type="text" name="name" className="border rounded p-2 my-2" placeholder="ex. John Smith" onChange={e => setName(e.target.value)} />
                    <label htmlFor="email" className="mt-2">Email address</label>
                    <input type="text" name="email" className="border rounded p-2 my-2" placeholder="ex. you@domain.com" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="message" className="mt-2">Your message</label>
                    <textarea name="message" className="border rounded p-2 my-2" onChange={e => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="my-1 bg-blue-500 text-white hover:bg-blue-600 rounded-lg p-4">Send your message</button>
                    <div id="contact-form-data"></div>
                </form>
            </Modal>
        </div>


    )
}

type ContactFormProps = {
    id: string,
}
