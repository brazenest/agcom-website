"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-divider)] bg-[var(--color-surface)] mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-sm"
      >
        <p className="font-[var(--font-engineering)] text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Alden Gillespy — Engineering + Cinematic Storytelling
        </p>

        <div className="flex gap-6 text-[var(--color-text-secondary)] font-[var(--font-engineering)]">
          <Link
            href="https://youtube.com/c/SHADOWCATpictures"
            target="_blank"
            className="hover:text-[var(--color-accent-amber)] transition-colors"
          >
            YouTube
          </Link>
          <Link
            href="https://www.instagram.com/agthecreative"
            target="_blank"
            className="hover:text-[var(--color-accent-amber)] transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/alden-gillespy"
            target="_blank"
            className="hover:text-[var(--color-accent-amber)] transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </motion.div>
    </footer>
  );
}
