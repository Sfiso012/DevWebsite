// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './context/**/*.{js,ts,jsx,tsx,mdx}',
    ], // <-- Close the content array properly
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#1a1a1a',
                accent: '#00ff00',
                glitch: '#ff00ff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'glitch': 'glitch 2s infinite',
                'float': 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}