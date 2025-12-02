// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: [
		'./app/**/*.{ts,tsx,js,jsx,mdx}',
		'./components/**/*.{ts,tsx,js,jsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				// default body
				sans: [
					'var(--font-engineering)',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
				// explicit classes: font-engineering, font-cinematic, font-heading
				engineering: [
					'var(--font-engineering)',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
				cinematic: [
					'var(--font-cinematic)',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
				heading: [
					'var(--font-cinematic)',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'sans-serif',
				],
			},
			colors: {
				bg: "var(--color-bg)",
				"bg-alt": "var(--color-bg-alt)",
				text: "var(--color-text)",
				"text-muted": "var(--color-text-muted)",
				title: "var(--color-title)",
				accent: "var(--color-accent)",
				"accent-hover": "var(--color-accent-hover)",
				"accent-subtle": "var(--color-accent-subtle)",
				border: "var(--color-border)",
				"border-strong": "var(--color-border-strong)",
				"card-bg": "var(--color-card-bg)",
				"card-bg-hover": "var(--color-card-bg-hover)",
				brand: {
					50: "var(--color-brand-50)",
					100: "var(--color-brand-100)",
					200: "var(--color-brand-200)",
					300: "var(--color-brand-300)",
					400: "var(--color-brand-400)",
					500: "var(--color-brand-500)",   // primary engineering blue
					600: "var(--color-brand-600)",
					700: "var(--color-brand-700)",
					800: "var(--color-brand-800)",
					900: "var(--color-brand-900)",
				},

			},
			borderRadius: {
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
				xl: "var(--radius-xl)",
			},
			boxShadow: {
				sm: "var(--shadow-sm)",
				md: "var(--shadow-md)",
				lg: "var(--shadow-lg)",
			},
			spacing: {
				1: "var(--space-1)",
				2: "var(--space-2)",
				3: "var(--space-3)",
				4: "var(--space-4)",
				6: "var(--space-6)",
				8: "var(--space-8)",
				12: "var(--space-12)",
				16: "var(--space-16)",
				gutter: 'var(--layout-gutter)',
			},
			fontSize: {
				xs: "var(--text-xs)",
				sm: ["var(--text-sm)", "calc(0.875rem * 24 / 14)"],
				base: "var(--text-base)",
				lg: ["var(--text-lg)", "calc(1.125rem * 26 / 18)"],
				xl: "var(--text-xl)",
				"2xl": "var(--text-2xl)",
				"3xl": "var(--text-3xl)",
				"4xl": "var(--text-4xl)",
				"5xl": ["var(--text-5xl)", "calc(3rem * 56 / 48)"],
				"6xl": ["var(--text-6xl)", "calc(3.75rem * 74 / 60)"],
			},
			screens: {
				'3xl': '1920px',
			},
			maxWidth: {
				'content-max': 'var(--layout-content-max)',
				'content-wide': 'var(--layout-content-wide)',
			},
		},
	},
	plugins: [],
}

export default config
