/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#fafaf9',
          100: '#f5f4f2',
          200: '#e8e6e3',
          300: '#d4d1cc',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0f0e0d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          150: '#fbf5eb',
          200: '#f7ede0',
        },
        terra: {
          300: '#d4956a',
          400: '#c97d4f',
          500: '#b8673a',
          600: '#a3552d',
          700: '#8a4626',
          800: '#6e3820',
        },
        gold: {
          200: '#f5e6b8',
          300: '#f0d98a',
          400: '#e8c94e',
        },
      },
      letterSpacing: {
        wider2: '0.12em',
        wider3: '0.2em',
      },
      boxShadow: {
        luxe: '0 4px 20px -4px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        'luxe-lg': '0 12px 40px -8px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
