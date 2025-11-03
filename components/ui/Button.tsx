"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // optional: classNames helper if you have it

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  as?: "button" | "a";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-[var(--font-engineering)] font-medium transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]";

  const styles = {
    primary:
      "bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-amber)] text-[var(--color-text-inverse)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-[1px] active:translate-y-0",
    secondary:
      "bg-[var(--color-surface-alt)] text-[var(--color-text-primary)] border border-[var(--color-divider)] hover:bg-[var(--color-surface)] hover:shadow-[var(--shadow-soft)]",
  };

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <Comp
      whileTap={{ scale: 0.98 }}
      href={href}
      className={cn(base, styles[variant], "px-6 py-3 text-sm rounded-lg", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
