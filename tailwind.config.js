const colors = require('tailwindcss/colors')

module.exports = {
  purge:['./**/*.html', './src/**/*.js'],
  darkMode: false, 
  content: [],
  theme: {
    extend: {
      colors:{
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [],
}
