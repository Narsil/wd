/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}", "./themes/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            "wd": "#A4261E",
            "wd-light": "rgb(164 38 30 / 28%)",
            "cream": "#F3EEEE"
        },
        fontFamily: {
            'body': ['BodoniStdBook'],
            'title': ['ssbruney'],
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
