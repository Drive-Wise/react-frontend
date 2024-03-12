/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          title: {
            DEFAULT: '#EF5448'
          },
          background: {
            DEFAULT: '#291F1E'
          },
          textp: {
            DEFAULT: '#F5FEF9'
          }
      }
    },
  },
  plugins: [],
}



