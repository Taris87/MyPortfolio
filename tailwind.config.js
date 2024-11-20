/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#12f7ff',
          DEFAULT: '#12f7ff',
          dark: '#0ce6ee',
        }
      }
    },
  },
  plugins: [],
}