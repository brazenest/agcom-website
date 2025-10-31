"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="
        fixed bottom-6 right-6
        bg-white/10 dark:bg-black/20
        backdrop-blur-md border border-white/10
        rounded-full p-3 shadow-lg
        text-white dark:text-[#0B0C10]
        hover:scale-105 transition-transform duration-200
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#4B6BFB]
      "
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
