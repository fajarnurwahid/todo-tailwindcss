/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            onest: ['Onest', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
        },
        boxShadow: {
            bottom: '0 8px 0 0 #000'
        }
    },
  },
  plugins: [],
}

