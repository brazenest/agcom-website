"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import clsx from "clsx";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Load initial theme
    useEffect(() => {
        const stored = localStorage.getItem("theme") as "light" | "dark" | null;
        if (stored) {
            setTheme(stored);
            document.documentElement.setAttribute("data-theme", stored);
        }
    }, []);

    const toggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <button
            onClick={toggle}
            className={clsx(
                "p-2 rounded-full transition-colors duration-300",
                "bg-surface dark:bg-dark-surface border border-border dark:border-dark-border",
                "hover:bg-surface-muted dark:hover:bg-dark-surface-muted"
            )}
        >
            {theme === "light" ? (
                <FaMoon className="text-text dark:text-dark-text text-lg" />
            ) : (
                <FaSun className="text-text dark:text-dark-text text-lg" />
            )}
        </button>
    );
}
