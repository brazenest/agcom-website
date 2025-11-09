"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react"; // or your preferred icons
import { motion } from "framer-motion";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </motion.button>
  );
}
