"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>("light");

	// Sync state with DOM & localStorage
	const apply = (next: Theme) => {
		setThemeState(next);
		document.documentElement.dataset.theme = next;
		localStorage.setItem("theme", next);
	};

	const setTheme = (next: Theme) => apply(next);

	const toggleTheme = () => {
		apply(theme === "light" ? "dark" : "light");
	};

	// First hydration sync
	useEffect(() => {
		const stored = localStorage.getItem("theme") as Theme | null;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		apply(stored || (prefersDark ? "dark" : "light"));
		 
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme() must be used inside <ThemeProvider>.");
	return ctx;
}
