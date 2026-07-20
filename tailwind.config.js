/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d9dae0',
          300: '#b7b9c4',
          400: '#8e91a2',
          500: '#6e7183',
          600: '#54576a',
          700: '#3f4256',
          800: '#252838',
          900: '#141626',
          950: '#0a0b16',
        },
        accent: {
          DEFAULT: '#7c5cff',
          soft: '#a48bff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
