/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        Handjet: [ 'Handjet'],
      },
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}