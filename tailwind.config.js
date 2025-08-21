/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'gray-110': '#f8f9fa',
        'gray-220': '#e9ecef'
      }
    },
  },
  plugins: [],
}