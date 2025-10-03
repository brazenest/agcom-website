'use client'
import { useState } from "react"

export default function ContactForm({ id }: ContactFormProps) {

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

            const { response: responseData } = await res.json()
            e.target.reset()
            dataDiv.innerHTML = responseData

        } catch (err: any) {
            console.error('Error:', err)
        }
    }

    return (
        <form id={id} className="contact-form flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" placeholder="ex. John Smith" onChange={e => setName(e.target.value)} />
            <label htmlFor="email">Email address</label>
            <input type="text" name="email" placeholder="ex. you@domain.com" onChange={e => setEmail(e.target.value)} />
            <label htmlFor="message">Your message</label>
            <textarea name="message" onChange={e => setMessage(e.target.value)}></textarea>
            <button type="submit">Send message</button>
            <div id="contact-form-data"></div>
        </form>
    )
}

type ContactFormProps = {
    id: string,
}
