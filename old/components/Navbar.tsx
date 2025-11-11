"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import HeaderThemeToggle from "./HeaderThemeToggle";
import LogoMark from "./LogoMark";

export const Navbar = ({ links }: NavbarProps) => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-white/60 dark:bg-neutral-900/60
        border-b border-neutral-200/40 dark:border-neutral-700/40
        shadow-[0_2px_8px_rgba(0,0,0,0.04)]
        transition-colors duration-300
      "
  >
    <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" aria-label="Alden Gillespy home" className="flex items-center gap-2">
        <LogoMark size={10} />
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium items-center">
        {links.map(({ href, content }) => <NavbarLink key={href} href={href} >{content}</NavbarLink>)}
        <Link
          href="mailto:ag@aldengillespy.com"
          className="btn px-5 py-2 rounded-lg text-white transition"
        >
          Contact Me
        </Link>
        {/* Add theme toggle here */}
        <HeaderThemeToggle />
      </div>

    </div>
  </motion.nav>
)

export default Navbar

type NavbarProps = {
  links: NavbarLinkT[],
}

export type NavbarLinkT = {
  href: string,
  className?: string,
  replaceClassName?: boolean,
  content: string | ReactNode,
}
type NavbarLinkProps = {
  href: string,
  className?: string,
  replaceClassName?: boolean,
  children: ReactNode,
}

const NavbarLink = ({ href, children, className = '', replaceClassName = true }: NavbarLinkProps) => (
  <Link href={href} className={`${!replaceClassName ? 'hover:text-amber-500 transition-colors' : ''} ${className}`}>
    {children}
  </Link>
)