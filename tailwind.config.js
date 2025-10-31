/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", "[data-theme='dark']"],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router projects
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages Router projects
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Add other paths if you have components or files in different directories
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                display: ["var(--font-display)"],
            },
            colors: {
                bg: 'var(--color-bg)',
                surface: 'var(--color-surface)',
                'surface-alt': 'var(--color-surface-alt)',
                border: 'var(--color-border)',
                text: 'var(--color-text)',
                subtext: 'var(--color-subtext)',
                'accent-blue': 'var(--color-accent-blue)',
                'accent-blue-light': 'var(--color-accent-blue-light)',
                'accent-amber': 'var(--color-accent-amber)',
                'accent-amber-light': 'var(--color-accent-amber-light)',
                'accent-green': 'var(--color-accent-green)',
                'accent-red': 'var(--color-accent-red)',

                /* Semantic Roles */
                'bg-hero': 'var(--color-bg-hero)',
                'bg-section': 'var(--color-bg-section)',
                'bg-footer': 'var(--color-bg-footer)',
                'card-surface': 'var(--color-card-surface)',
                'card-border': 'var(--color-card-border)',
                'card-text': 'var(--color-card-text)',

                link: 'var(--color-link)',
                'link-hover': 'var(--color-link-hover)',
                'link-external': 'var(--color-link-external-icon)',
            },

            /*────────── FONTS ──────────*/
            fontFamily: {
                sans: ['var(--font-sans)', 'sans-serif'],
                display: ['var(--font-display)', 'sans-serif'],
            },

            /*────────── BORDER RADIUS ──────────*/
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
            },

            /*────────── SHADOWS ──────────*/
            boxShadow: {
                soft: 'var(--shadow-soft)',
                strong: 'var(--shadow-strong)',
            },

            /*────────── SPACING ──────────*/
            spacing: {
                1: 'var(--space-1)',
                2: 'var(--space-2)',
                3: 'var(--space-3)',
                4: 'var(--space-4)',
                6: 'var(--space-6)',
                8: 'var(--space-8)',
                12: 'var(--space-12)',
                16: 'var(--space-16)',
                20: 'var(--space-20)',
                32: 'var(--space-32)',
            },

            /*────────── FONT SIZES ──────────*/
            fontSize: {
                xs: 'var(--text-xs)',
                sm: 'var(--text-sm)',
                base: 'var(--text-base)',
                lg: 'var(--text-lg)',
                xl: 'var(--text-xl)',
                '2xl': 'var(--text-2xl)',
                '3xl': 'var(--text-3xl)',
                '4xl': 'var(--text-4xl)',
                '5xl': 'var(--text-5xl)',
            },

            /*────────── TRANSITIONS ──────────*/
            transitionDuration: {
                fast: '150ms',
                normal: '250ms',
                slow: '400ms',
            },
            transitionTimingFunction: {
                smooth: 'ease',
            },
        },
        boxShadow: {
            soft: "var(--shadow-soft)",
            strong: "var(--shadow-strong)",
        },
        borderRadius: {
            xl: "var(--radius)",
        },
    },
    /*────────── PLUGINS ──────────*/
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.gradient-cinematic': {
                    background:
                        'linear-gradient(to right, var(--color-accent-blue), var(--color-accent-amber))',
                },
                '.gradient-tech': {
                    background:
                        'linear-gradient(135deg, var(--color-tech-bg), var(--color-accent-blue))',
                },
                '.gradient-cinema': {
                    background:
                        'linear-gradient(135deg, var(--color-cinema-bg), var(--color-accent-amber))',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
