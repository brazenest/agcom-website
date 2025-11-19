"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="relative flex items-center justify-center w-10 h-10 rounded-full 
                 transition-colors duration-200 
                 bg-bg-alt hover:bg-card-bg border border-border"
        >
            <motion.div
                key={theme}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.18 }}
                className="text-accent font-cinematic text-xl"
            >
                {theme === "light" ? <FaSun className="text-text dark:text-dark-text text-lg" /> : <FaMoon className="text-text dark:text-dark-text text-lg" />}
            </motion.div>
        </button>
    );
}
