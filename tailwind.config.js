/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./themes/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            "wd": "#A4261E"
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
