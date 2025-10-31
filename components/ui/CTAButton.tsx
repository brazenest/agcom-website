"use client";
import clsx from "clsx";

export default function CTAButton({
  variant = "primary",
  href,
  children,
}: {
  variant?: "primary" | "outline" | "ghost";
  href: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-block rounded-xl px-6 py-3 font-medium transition-all duration-300 select-none";

  const styles =
    variant === "primary"
      ? // 🔵 Solid blue button
        "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md"
      : variant === "outline"
      ? // 🟠 Amber border outline
        "border-2 border-amber-500 hover:border-amber-400 text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
      : // ⚪ Ghost (transparent, for over gradients/images)
        "bg-transparent text-white/90 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-[2px]";

  return (
    <a href={href} className={clsx(base, styles)}>
      {children}
    </a>
  );
}
