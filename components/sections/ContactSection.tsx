"use client";

import ContactModal from "../contact/ContactModal";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl p-8 bg-[var(--color-surface)] border border-[var(--color-divider)] text-center">
        <h2 className="font-[var(--font-cinema)] text-2xl mb-2 text-[var(--color-text-primary)]">Let’s talk</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">Interested in working together or have a question? Send me a note and I’ll get back to you.</p>
        <div className="flex items-center justify-center">
          <ContactModal />
        </div>
      </div>
    </section>
  );
}
