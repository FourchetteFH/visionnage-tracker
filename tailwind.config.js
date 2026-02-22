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
      },
      colors: {
        // Notre palette custom pour le thème sombre
        dark: {
          50: '#f0f0f5',
          100: '#d9d9e3',
          200: '#b3b3c7',
          300: '#8c8caa',
          400: '#66668e',
          500: '#4d4d73',
          600: '#3d3d5c',
          700: '#2d2d44',
          800: '#1e1e2e',
          900: '#13131d',
          950: '#0a0a12',
        },
        accent: {
          DEFAULT: '#8b5cf6',  // Violet principal
          light: '#a78bfa',
          dark: '#7c3aed',
          glow: '#c4b5fd',
        },
      },
    },
  },
  plugins: [],
}
