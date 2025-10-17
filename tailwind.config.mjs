/** @type {import('tailwindcss').Config} */
const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                bokor: ['var(--font-bokor)'],
                robotoMono: ['var(--font-roboto-mono)'],
            },
        },
    },
    plugins: [],
};

export default config;
