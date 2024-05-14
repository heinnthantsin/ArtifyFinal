/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        quinary: "#c6c6c6",
        forest: "#204045",
        navColor: "#e9e6e4",
        textColor: "#333333",
        titleColor: "#494554"
      }
    },
  },
  plugins: [],
})

