"use client";

import Link from "next/link";
import ContactFormModal from "../ContactFormModal";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[rgba(14,14,16,0.8)] border-b border-[var(--color-divider)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[var(--font-cinema)] text-xl bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] bg-clip-text text-transparent"
        >
          Alden Gillespy
        </Link>
        <div className="flex gap-6 items-center text-sm font-[var(--font-engineering)] text-[var(--color-text-primary)]">
          <Link href="/#work" className="hover:text-[var(--color-accent-amber)] transition-colors">
            Work
          </Link>
          <Link href="/blog" className="hover:text-[var(--color-accent-amber)] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-[var(--color-accent-amber)] transition-colors">
            About
          </Link>
          <ContactFormModal
            id="site-nav-contact"
            buttonText="Contact Me!"
            buttonClassName="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-white font-[var(--font-engineering)] !text-black"
          />
        </div>
      </div>
    </nav>
  );
}
