/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Semantic ink scale driven by CSS variables so the whole app can flip
        // between dark and light themes without per-component changes.
        // Low numbers = foreground (text), high numbers = background.
        ink: {
          50: 'rgb(var(--ink-50) / <alpha-value>)',
          100: 'rgb(var(--ink-100) / <alpha-value>)',
          200: 'rgb(var(--ink-200) / <alpha-value>)',
          300: 'rgb(var(--ink-300) / <alpha-value>)',
          400: 'rgb(var(--ink-400) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          850: 'rgb(var(--ink-850) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          950: 'rgb(var(--ink-950) / <alpha-value>)',
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'shine': 'shine 2.5s ease-in-out infinite',
        // Long, mismatched durations so the three fields never fall into a
        // visible repeating pattern together
        'drift-slow': 'driftSlow 21s ease-in-out infinite',
        'drift-mid': 'driftMid 17s ease-in-out infinite',
        'drift-fast': 'driftFast 13s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        // Three waypoints instead of two: an A→B→A ping-pong reads as the same
        // move played backwards, which is obvious once you notice it
        driftSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(10vw, 7vh, 0) scale(1.2)' },
          '66%': { transform: 'translate3d(4vw, -6vh, 0) scale(1.08)' },
        },
        driftMid: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1.12)' },
          '33%': { transform: 'translate3d(-9vw, 9vh, 0) scale(1)' },
          '66%': { transform: 'translate3d(-3vw, 3vh, 0) scale(1.16)' },
        },
        driftFast: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(7vw, -8vh, 0) scale(1.24)' },
          '66%': { transform: 'translate3d(-5vw, -3vh, 0) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
