// types/theme.d.ts
// Alden Gillespy Design System Type Definitions
// Provides autocompletion + type safety for CSS variables and design tokens.

export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  /* Base palette */
  "--color-bg": string;
  "--color-surface": string;
  "--color-surface-alt": string;
  "--color-border": string;

  /* Text */
  "--color-text": string;
  "--color-subtext": string;
  "--text-on-dark": string;
  "--text-on-light": string;
  "--subtext-on-dark": string;
  "--subtext-on-light": string;

  /* Accents */
  "--color-accent-blue": string;
  "--color-accent-blue-light": string;
  "--color-accent-amber": string;
  "--color-accent-amber-light": string;

  /* Gradients */
  "--gradient-tech": string;
  "--gradient-cinema": string;
  "--gradient-hybrid": string;

  /* Shadows */
  "--shadow-soft": string;
  "--shadow-strong": string;
}

export interface ThemeRadii {
  "--radius-sm": string;
  "--radius-md": string;
  "--radius-lg": string;
  "--radius-xl": string;
}

export interface ThemeSpacing {
  "--space-1": string;
  "--space-2": string;
  "--space-3": string;
  "--space-4": string;
  "--space-6": string;
  "--space-8": string;
  "--space-12": string;
  "--space-16": string;
  "--space-20": string;
  "--space-32": string;
}

export interface ThemeFonts {
  "--font-sans": string;
  "--font-display": string;
  "--font-weight-normal": string;
  "--font-weight-medium": string;
  "--font-weight-semibold": string;
  "--font-weight-bold": string;
}

/** Combined theme token structure */
export interface AldenTheme {
  mode: ThemeMode;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  radii: ThemeRadii;
  fonts: ThemeFonts;
}

/** Default export for utility imports */
declare const theme: AldenTheme;
export default theme;
