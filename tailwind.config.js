/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "#3800d8",
          secondary: "#00b5d3"
      },
      fontFamily: {
          'sans': ['Karla']
      },
      minHeight: {
          "placeholder": "51rem"
      },
      width: {
          "128": "32rem"
      },
      aspectRatio: {
        'phone': '9 / 16',
      },
    },
  },
  plugins: [],
}