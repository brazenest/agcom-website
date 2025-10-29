"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-md bg-[#0B0C10]/85 border-b border-[#1E3A8A]/40"
          : "bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* === Left: Name / Logo === */}
        <Link
          href="/"
          className="text-[#F5F6F8] font-bold text-lg tracking-wide"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Alden&nbsp;Gillespy
        </Link>

        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#C6C8CE] hover:text-[#F5F6F8] transition-colors">
            Home
          </Link>
          <Link href="/work" className="text-[#C6C8CE] hover:text-[#F5F6F8] transition-colors">
            Work
          </Link>
          <Link href="/about" className="text-[#C6C8CE] hover:text-[#F5F6F8] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[#C6C8CE] hover:text-[#F5F6F8] transition-colors">
            Contact
          </Link>

          <Link
            href="/work"
            className="
              bg-[#1E3A8A] hover:bg-[#153070]
              text-white font-semibold
              px-5 py-2 rounded-md
              shadow-[0_12px_24px_rgba(30,58,138,0.4)]
              transition-all duration-200
              hover:-translate-y-0.5
            "
          >
            View&nbsp;My&nbsp;Work
          </Link>
        </nav>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-[#F5F6F8] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* === Accent Line (always visible) === */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-[1px]
          bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent
          pointer-events-none
        "
      />

      {/* === Mobile Menu Panel === */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0C10]/95 backdrop-blur-md border-t border-[#1E3A8A]/40">
          {/* Cyan accent line under the header */}
          <div
            className="
              w-full h-[1px]
              bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent
              mb-4
            "
          />

          <div className="flex flex-col items-center space-y-4 py-6">
            {["Home", "Work", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[#F5F6F8] text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/work"
              onClick={() => setIsOpen(false)}
              className="
                bg-[#1E3A8A] hover:bg-[#153070]
                text-white font-semibold
                px-6 py-2 rounded-md
                shadow-[0_12px_24px_rgba(30,58,138,0.4)]
                transition-all duration-200
              "
            >
              View&nbsp;My&nbsp;Work
            </Link>
          </div>

          {/* Cyan line at bottom for visual closure */}
          <div
            className="
              w-full h-[1px]
              bg-gradient-to-r from-transparent via-[#3B82F6]/60 to-transparent
              mt-4
            "
          />
        </div>
      )}
    </header>
  );
}
