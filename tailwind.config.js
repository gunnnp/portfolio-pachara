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
        ink: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          850: '#1a1a1a',
          900: '#111111',
          950: '#0a0a0a',
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
