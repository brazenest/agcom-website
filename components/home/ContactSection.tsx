'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-text bg-bg"
    >
      <div className="rounded-2xl p-8 md:p-12 bg-surface border border-border text-center shadow-sm">
        <h2 className="font-cinematic text-2xl md:text-3xl mb-3 text-text">
          Let’s talk
        </h2>
        <p className="text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed font-engineering">
          Interested in working together or have a question? Send me a note and
          I’ll get back to you.
        </p>

        <div className="flex items-center justify-center">
          <Link
            href="mailto:ag@aldengillespy.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-engineering text-white bg-accent hover:bg-accent-hover transition-colors duration-200 shadow-md"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
