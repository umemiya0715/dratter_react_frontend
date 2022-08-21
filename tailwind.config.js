/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        twitterBlue: '#1da1f2',
        navGray: '#b3b3b3'
      }
    },
  },
  plugins: [],
}
