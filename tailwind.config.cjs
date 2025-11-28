/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#22272b',
        'accent-red': '#b71c1c'
      }
    }
  },
  plugins: []
}
