/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        'light-gray': '#F5F7FA',
        'med-gray': '#E4E7EB',
        gray: {
          DEFAULT: '#8A94A6',
          dark: '#3E4C59',
          900: '#1A202C',
          700: '#4A5568',
          300: '#CBD5E0',
        },
        white: '#FFFFFF',
        black: '#1A202C',
        blue: {
          100: '#EBF8FF',
          800: '#2C5282',
        },
        green: {
          100: '#F0FFF4',
          800: '#276749',
        },
        yellow: {
          100: '#FFFFF0',
          800: '#975A16',
        },
        red: {
          100: '#FFF5F5',
          800: '#9B2C2C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
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
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 