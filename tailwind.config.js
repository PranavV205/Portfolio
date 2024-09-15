/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'light': '#cff5ff',
        'medium': '#2b90a6',
        'dark': '#4a6f8a',
      }
    },
  },
  plugins: [],
}