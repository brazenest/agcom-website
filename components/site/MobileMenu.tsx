"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function MobileMenu({ open, close }: { open: boolean; close: () => void }) {
    return (
        <div
            className={clsx(
                "fixed top-20 left-0 w-full z-40 md:hidden",
                "transition-all duration-300",
                open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-surface dark:bg-dark-surface border-t border-border dark:border-dark-border shadow-lg py-6 px-6 font-engineering space-y-6">

                <MobileLink href="/" close={close}>Home</MobileLink>
                <MobileLink href="/#work" close={close}>Work</MobileLink>
                <MobileLink href="/blog" close={close}>Blog</MobileLink>
                <MobileLink href="/about" close={close}>About</MobileLink>

                <Button variant="primary" asChild className="block w-full">
                    <Link href="#contact" onClick={close}>Contact</Link>
                </Button>
            </div>
        </div>
    );
}

function MobileLink({ href, children, close }: any) {
    return (
        <Link
            href={href}
            onClick={close}
            className="block text-lg text-text dark:text-dark-text hover:text-brand-500 dark:hover:text-dark-brand-500 transition-colors"
        >
            {children}
        </Link>
    );
}
