"use client";

import Link from "next/link";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg text-neutral-800 dark:text-neutral-100 font-engineering"
        >
          Alden Gillespy
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(({ href, content }) => <NavbarLink href={href} >{content}</NavbarLink>)}
<Link
            href="mailto:ag@aldengillespy.com"
            className="btn px-5 py-2 rounded-lg text-white transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Theme Toggle */}
        <ThemeToggleButton />
      </div>
    </motion.nav>
)

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