"use client";

import ContactFormModal from "@/components/ContactFormModal";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl p-8 bg-[var(--color-surface)] border border-[var(--color-divider)] text-center">
        <h2 className="font-[var(--font-cinema)] text-2xl mb-2 text-[var(--color-text-primary)]">Let’s talk</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">Interested in working together or have a question? Send me a note and I’ll get back to you.</p>
        <div className="flex items-center justify-center">
          <ContactFormModal
            id="home-contact"
            buttonText="Get in touch"
            buttonClassName="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-white font-[var(--font-engineering)] !text-black"
          />
        </div>
      </div>
    </section>
  );
}
