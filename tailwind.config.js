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
          light: '#f2f8f8',
          DEFAULT: '#12f7ff',
          dark: '#0ce6ee',
        }
      },
      keyframes: {
        'blink': {
          '50%': { borderColor: 'transparent' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 }
        },
        'blob': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(10px, -10px) scale(1.05, 0.95)',
          },
          '66%': {
            transform: 'translate(-10px, 10px) scale(0.95, 1.05)',
          }
        },
        'scroll': {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: 0.8,
          },
          '50%': {
            transform: 'translateY(10px)',
            opacity: 0.3,
          }
        },
        'scroll-arrow': {
          '0%': {
            opacity: 0,
            transform: 'translateY(-8px)'
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(8px)'
          }
        },
        'glow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 2px rgba(18, 247, 255, 0.3))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 8px rgba(18, 247, 255, 0.6))',
          }
        }
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'blob-slow': 'blob 8s infinite',
        'blob-slower': 'blob 9s infinite',
        'scroll': 'scroll 2s ease-in-out infinite',
        'scroll-arrow-1': 'scroll-arrow 2s ease-in-out infinite',
        'scroll-arrow-2': 'scroll-arrow 2s ease-in-out infinite 0.3s',
        'glow': 'glow 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}