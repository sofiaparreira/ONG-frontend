// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // se estiver usando app directory (Next.js 13+)
    './pages/**/*.{js,ts,jsx,tsx}', // se estiver usando pages
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: '#FFD60A',
      },
    },
  },
  plugins: [],
}
