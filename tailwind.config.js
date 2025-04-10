/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#a33c3b',
        secondary: '#403b49',
        // usetheme: '#723C42',
        usetheme: '#06576c',
        mstheme: '#06576c',
        mstheme_hover: '#06576c',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}