/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router projects
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // For Pages Router projects
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Add other paths if you have components or files in different directories
    ],
    theme: {
        extend: {
            keyframes: {
                'gradient-slow': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            animation: {
                'gradient-slow': 'gradient-slow 15s ease infinite',
            },
        },
    },
    plugins: [],
};