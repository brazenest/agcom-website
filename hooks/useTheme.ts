"use client";

import { useEffect, useState, useCallback } from "react";
import type { AldenTheme, ThemeMode } from "@/types/theme";

/**
 * useTheme()
 * Provides access to CSS tokens and a setTheme() helper to toggle between light/dark.
 */
export default function useTheme() {
  const [theme, setThemeState] = useState<AldenTheme>(() => ({
    mode:
      typeof document !== "undefined" &&
      (document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark")
        ? "dark"
        : "light",
    colors: {} as AldenTheme["colors"],
    spacing: {} as AldenTheme["spacing"],
    radii: {} as AldenTheme["radii"],
    fonts: {} as AldenTheme["fonts"],
  }));

  const getVar = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  /** Reads all CSS variables and current theme mode */
  const readTheme = useCallback((): AldenTheme => {
    const html = document.documentElement;
    const mode =
      html.classList.contains("dark") ||
      html.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";

    return {
      mode,
      colors: {
        "--color-bg": getVar("--color-bg"),
        "--color-surface": getVar("--color-surface"),
        "--color-surface-alt": getVar("--color-surface-alt"),
        "--color-border": getVar("--color-border"),
        "--color-text": getVar("--color-text"),
        "--color-subtext": getVar("--color-subtext"),
        "--text-on-dark": getVar("--text-on-dark"),
        "--text-on-light": getVar("--text-on-light"),
        "--subtext-on-dark": getVar("--subtext-on-dark"),
        "--subtext-on-light": getVar("--subtext-on-light"),
        "--color-accent-blue": getVar("--color-accent-blue"),
        "--color-accent-blue-light": getVar("--color-accent-blue-light"),
        "--color-accent-amber": getVar("--color-accent-amber"),
        "--color-accent-amber-light": getVar("--color-accent-amber-light"),
        "--gradient-tech": getVar("--gradient-tech"),
        "--gradient-cinema": getVar("--gradient-cinema"),
        "--gradient-hybrid": getVar("--gradient-hybrid"),
        "--shadow-soft": getVar("--shadow-soft"),
        "--shadow-strong": getVar("--shadow-strong"),
      },
      spacing: {
        "--space-1": getVar("--space-1"),
        "--space-2": getVar("--space-2"),
        "--space-3": getVar("--space-3"),
        "--space-4": getVar("--space-4"),
        "--space-6": getVar("--space-6"),
        "--space-8": getVar("--space-8"),
        "--space-12": getVar("--space-12"),
        "--space-16": getVar("--space-16"),
        "--space-20": getVar("--space-20"),
        "--space-32": getVar("--space-32"),
      },
      radii: {
        "--radius-sm": getVar("--radius-sm"),
        "--radius-md": getVar("--radius-md"),
        "--radius-lg": getVar("--radius-lg"),
        "--radius-xl": getVar("--radius-xl"),
      },
      fonts: {
        "--font-sans": getVar("--font-sans"),
        "--font-display": getVar("--font-display"),
        "--font-weight-normal": getVar("--font-weight-normal"),
        "--font-weight-medium": getVar("--font-weight-medium"),
        "--font-weight-semibold": getVar("--font-weight-semibold"),
        "--font-weight-bold": getVar("--font-weight-bold"),
      },
    };
  }, []);

  /** Programmatically set theme mode and persist it */
  const setTheme = useCallback((mode: ThemeMode) => {
    const html = document.documentElement;
    html.setAttribute("data-theme", mode);
    html.classList.toggle("dark", mode === "dark");
    localStorage.setItem("theme", mode);
    setThemeState(readTheme());
  }, [readTheme]);

  useEffect(() => {
    const html = document.documentElement;
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    if (saved) setTheme(saved);
    else setThemeState(readTheme());

    const observer = new MutationObserver(() => {
      setThemeState(readTheme());
    });

    observer.observe(html, { attributes: true, attributeFilter: ["data-theme", "class"] });

    return () => observer.disconnect();
  }, [readTheme, setTheme]);

  return { ...theme, setTheme };
}
