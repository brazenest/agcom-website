"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 120 && top >= -sec.clientHeight / 1.5)
          current = sec.getAttribute("id") || "";
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Calculate background opacity & blur dynamically
  const bgOpacity = Math.min(scrollY / 300, 0.8);
  const blurIntensity = Math.min(scrollY / 100, 10);
  const scale = scrollY > 50 ? 0.985 : 1;

  return (
    <motion.header
      animate={{
        backdropFilter: `blur(${blurIntensity}px)`,
        backgroundColor:
          theme === "dark"
            ? `rgba(17, 20, 24, ${bgOpacity})`
            : `rgba(249, 250, 251, ${bgOpacity})`,
        scale,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-border)] shadow-sm"
    >
      <nav id="site-header-nav" className="flex items-center justify-between px-6 md:px-16 py-4 transition-all duration-300">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-[var(--color-text)]"
        >
          Alden Gillespy
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`transition-colors font-medium ${
                active === link.href.slice(1)
                  ? "text-[var(--color-accent-blue)]"
                  : "text-[var(--color-subtext)] hover:text-[var(--color-text)]"
              }`}
            >
              {link.label}
            </button>
          ))}

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[var(--color-subtext)]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--color-subtext)]" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[var(--color-bg)] dark:bg-[var(--color-surface)] border-t border-[var(--color-border)] shadow-soft"
        >
          <div className="flex flex-col items-start px-6 py-4 space-y-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-[var(--color-text)] transition ${
                  active === link.href.slice(1)
                    ? "text-[var(--color-accent-blue)]"
                    : "hover:text-[var(--color-accent-blue)]"
                }`}
              >
                {link.label}
              </button>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mt-4 flex items-center gap-2 px-3 py-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface)] transition"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" /> Dark Mode
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
