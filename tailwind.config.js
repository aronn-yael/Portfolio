/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      colors: {
        border: 'hsl(var(--border))',
        primary: {
          50: '/* primary-50 */ #f0f9ff', // very light blue
          100: '/* primary-100 */ #e0f2fe', // light blue
          200: '/* primary-200 */ #bae6fd', // light blue
          300: '/* primary-300 */ #7dd3fc', // blue
          400: '/* primary-400 */ #38bdf8', // blue
          500: '/* primary-500 */ #0ea5e9', // dark blue
          600: '/* primary-600 */ #0284c7', // dark blue
          700: '/* primary-700 */ #0369a1', // dark blue
          800: '/* primary-800 */ #075985', // dark blue
          900: '/* primary-900 */ #0c4a6e', // dark blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
