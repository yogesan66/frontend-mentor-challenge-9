/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: 'hsl(227, 75%, 14%)',
          800: 'hsl(226, 25%, 17%)',
          700: 'hsl(225, 23%, 24%)',
          600: 'hsl(226, 11%, 37%)',
          300: 'hsl(0, 0%, 78%)',
          200: 'hsl(217, 61%, 90%)',
          100: 'hsl(0, 0%, 93%)',
          0: 'hsl(200, 60%, 99%)',
        },
        red: {
          400: 'hsl(3, 86%, 64%)',
          500: 'hsl(3, 71%, 56%)',
          700: 'hsl(3, 77%, 44%)',
        },
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)',
        'dark-gradient': 'linear-gradient(180deg, #040918 0%, #091540 100%)',
      },
    },
  },
  plugins: [],
}
