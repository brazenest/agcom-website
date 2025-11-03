/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'], // supports either dark class or data-theme
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        inter: ["Inter", "system-ui", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "system-ui", "sans-serif"],
        engineering: ["Inter", "sans-serif"],
        cinema: ["Space Grotesk", "sans-serif"],
      },

      fontSize: {
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem"
      },

      lineHeight: {
        normal: "1.6",
        tight: "1.25"
      },

      letterSpacing: {
        wide: "0.05em"
      },

      colors: {
        /* Token-based color system */
        bg: "#0E0E10",
        surface: "#161618",
        "surface-alt": "#1A1A1C",
        divider: "#2A2A2E",
        text: {
          primary: "#F5F5F7",
          secondary: "#A0A0A5",
          inverse: "#0E0E10"
        },
        accent: {
          blue: "var(--color-accent-blue)",
          amber: "var(--color-accent-amber)",
        },
      },

      backgroundImage: {
        "gradient-tech": "var(--gradient-tech)",
        "gradient-cinema": "var(--gradient-cinema)",
        "gradient-hybrid": "var(--gradient-hybrid)",
        "bg-hero": "var(--color-bg-hero)",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.35)",
        strong: "0 8px 40px rgba(0, 0, 0, 0.45)"
      },

      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        24: "6rem",
        32: "8rem"
      },

      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "3rem"
      },

      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px"
        }
      },

      transitionTimingFunction: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
        slow: "var(--transition-slow)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
