import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a9cff',
        primaryDark: '#ff9c4a',
        background: '#ffffff',
        backgroundDark: '#151719',
        /* ------------------------------------------
           LIGHT THEME — ENGINEERING BLUE
        ------------------------------------------ */
        brand: {
          50: '#f3f8ff',
          100: '#e1efff',
          200: '#bddcff',
          300: '#8cc4ff',
          400: '#55aaff',
          500: '#3a9cff',   // primary engineering blue
          600: '#1d7edb',
          700: '#1765b0',
          800: '#144f8a',
          900: '#123f6f',
        },

        surface: {
          DEFAULT: '#ffffff',
          muted: '#f7f9fb',
        },

        text: {
          DEFAULT: '#0c1b2a',
          secondary: '#4a5568',
          inverse: '#ffffff',
        },

        border: '#d7dde3',
        accent: '#3a9cff',

        /* ------------------------------------------
           DARK THEME — CINEMATIC AMBER
        ------------------------------------------ */
        dark: {
          brand: {
            50: '#3c2e1a',
            100: '#4d351c',
            200: '#714a23',
            300: '#915f2a',
            400: '#b67533',
            500: '#ff9c4a',   // primary cinematic amber
            600: '#ffa85f',
            700: '#ffb776',
            800: '#ffc98f',
            900: '#ffddb2',
          },
          surface: {
            DEFAULT: '#151719',
            muted: '#0c0d0f',
          },
          text: {
            DEFAULT: '#f2f1ed',
            secondary: '#a99f95',
            inverse: '#0c0d0f',
          },
          border: '#2a2c31',
        },
      }
    },
  },
  plugins: [],
};

export default config;
