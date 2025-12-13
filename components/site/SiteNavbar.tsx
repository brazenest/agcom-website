"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { ContactButton } from "../ui/ContactButton";

export function SiteNavbar() {

	const [mobileOpen, setMobileOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);

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
		<>
			<nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-300 no-underline!">

				{/* ---------- Logo ---------- */}
				<Link
					href="/"
					className="text-2xl"
				>
					Alden Gillespy
				</Link>

				{/* ---------- Desktop Nav ---------- */}
				<div className="hidden md:flex items-center gap-8">

					<NavLink id="hero" href="/">Home</NavLink>
					<NavLink id="work" href="/work">Work</NavLink>
					<NavLink id="about" href="/about">About</NavLink>
					<NavLink id="blog" href="/blog">Blog</NavLink>
					<NavLink id="contact" href="/resume">Resume</NavLink>
					
					<ContactButton
						variant="primary"
						size="xl"
					>
						Contact
					</ContactButton>

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
					"md:hidden fixed top-20 left-0 w-full bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border shadow-lg transition-all duration-300 bg-bg-alt z-50",
					mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				)}
			>
				<div className="flex flex-col py-6 px-6 text-text dark:text-dark-text gap-6">

					<MobileNavLink id="hero" href="/" onClick={() => setMobileOpen(false)}>
						Home
					</MobileNavLink>
					<MobileNavLink id="work" href="/work" onClick={() => setMobileOpen(false)}>
						Work
					</MobileNavLink>
					<MobileNavLink id="contact" href="/about" onClick={() => setMobileOpen(false)}>
						About
					</MobileNavLink>
					<MobileNavLink id="blog" href="/blog" onClick={() => setMobileOpen(false)}>
						Blog
					</MobileNavLink>
					<MobileNavLink id="blog" href="/resume" onClick={() => setMobileOpen(false)}>
						Resume
					</MobileNavLink>

					<ContactButton
						variant="primary"
						className="mt-2"
					>
						Contact
					</ContactButton>
				</div>
			</div>
		</>
	);
}

/* ---------- Desktop Nav Link ---------- */
function NavLink({
	href,
	children,
}: {
  href: string;
  children: React.ReactNode;
  id: string; // required for section-based highlighting
}) {

	return (
		<Link
			href={href}
			className={clsx(
				"relative group transition-all duration-300 text-text dark:text-dark-text",
			)}
		>
			{children}

			<span
				className={clsx(
					"absolute left-0 -bottom-1 h-[2px] rounded transition-all duration-300 w-0 group-hover:w-full bg-brand-400 dark:bg-dark-brand-400"
				)}
			/>
		</Link>
	);
}

/* ---------- Mobile Nav Link ---------- */
function MobileNavLink({ href, id, children, onClick }: MobileNavLinkProps) {

	return (
		<Link
			id={id}
			href={href}
			onClick={onClick}
			className={clsx(
				"block text-lg transition-all duration-300",
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
