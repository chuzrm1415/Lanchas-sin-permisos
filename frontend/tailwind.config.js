/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ocean: {
          50:  '#eaf6fb',
          100: '#c8e9f4',
          200: '#93d2ea',
          300: '#4db8de',
          400: '#1a9bc9',
          500: '#0e7fad',
          600: '#0b6691',
          700: '#0a5278',
          800: '#0b4162',
          900: '#0c3350',
          950: '#071e31',
        },
        sand: {
          50:  '#fefaee',
          100: '#fdf2ce',
          200: '#fbe498',
          300: '#f9cf5a',
          400: '#f6b82a',
          500: '#e89c12',
          600: '#cc780c',
          700: '#a9560e',
          800: '#8b4312',
          900: '#733812',
          950: '#421c06',
        },
        coral: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      backgroundImage: {
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 60'%3E%3Cpath fill='%230e7fad' fill-opacity='0.08' d='M0,30 C360,60 720,0 1080,30 C1260,45 1350,15 1440,30 L1440,60 L0,60 Z'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'bob': 'bob 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
