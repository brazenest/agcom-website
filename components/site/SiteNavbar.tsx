"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { useActiveSection } from "@/components/providers/SectionProvider";
import { ThemeToggle } from "../ui/ThemeToggle";


export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  /* ---------- Shrink + Fade Background on Scroll ---------- */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ---------- Close menu on click outside ---------- */
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-surface/80 dark:bg-dark-surface/80 shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-300">

        {/* ---------- Logo ---------- */}
        <Link
          href="/"
          className="font-cinematic text-2xl text-text dark:text-dark-text"
        >
          Alden Gillespy
        </Link>

        {/* ---------- Desktop Nav ---------- */}
        <div className="hidden md:flex items-center gap-8 font-engineering">

          <NavLink id="hero" href="/">Home</NavLink>
          <NavLink id="work" href="/#work">Work</NavLink>
          <NavLink id="blog" href="/blog">Blog</NavLink>
          <NavLink id="contact" href="/about">About</NavLink>

          {/* <LutToggle /> */}
          <ThemeToggle />

          <Button variant="primary" asChild>
            <Link href="#contact">Contact</Link>
          </Button>

        </div>

        {/* ---------- Mobile Menu Toggle ---------- */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-text dark:text-dark-text focus:outline-none"
        >
          <div className="space-y-1.5">
            <span
              className={clsx(
                "block h-0.5 w-6 bg-current transition-transform",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-current transition-opacity",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "block h-0.5 w-6 bg-current transition-transform",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* ---------- Mobile Menu ---------- */}
      <div
        ref={mobileMenuRef}
        className={clsx(
          "md:hidden fixed top-20 left-0 w-full bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border shadow-lg transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col py-6 px-6 text-text dark:text-dark-text font-engineering gap-6">

          <MobileNavLink id="hero" href="/" onClick={() => setMobileOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink id="work" href="/#work" onClick={() => setMobileOpen(false)}>
            Work
          </MobileNavLink>
          <MobileNavLink id="blog" href="/blog" onClick={() => setMobileOpen(false)}>
            Blog
          </MobileNavLink>
          <MobileNavLink id="contact" href="/about" onClick={() => setMobileOpen(false)}>
            About
          </MobileNavLink>

          <div className="flex justify-between items-center mt-4">
            <ThemeToggle />
          </div>

          <Button variant="primary" asChild className="mt-2">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Desktop Nav Link ---------- */
function NavLink({
  href,
  children,
  id,
}: {
  href: string;
  children: React.ReactNode;
  id: string; // required for section-based highlighting
}) {
  const activeSection = useActiveSection();
  const active = activeSection === id;

  return (
    <Link
      href={href}
      className={clsx(
        "relative group transition-all duration-300 text-text dark:text-dark-text",
        active && "text-brand-500 dark:text-dark-brand-500 font-semibold"
      )}
    >
      {children}

      <span
        className={clsx(
          "absolute left-0 -bottom-1 h-[2px] rounded transition-all duration-300",
          active
            ? "w-full bg-brand-500 dark:bg-dark-brand-500"
            : "w-0 group-hover:w-full bg-brand-400 dark:bg-dark-brand-400"
        )}
      />
    </Link>
  );
}

/* ---------- Mobile Nav Link ---------- */
function MobileNavLink({ href, id, children, onClick }: MobileNavLinkProps) {
  const activeSection = useActiveSection();
  const active = activeSection === id;

  return (
    <Link
      id={id}
      href={href}
      onClick={onClick}
      className={clsx(
        "block text-lg transition-all duration-300",
        active
          ? "text-brand-500 dark:text-dark-brand-500 font-semibold"
          : "text-text dark:text-dark-text"
      )}
    >
      {children}
    </Link>
  );
}

type MobileNavLinkProps = {
  href: string,
  id: string,
  children: string,
  onClick: () => void,
}
