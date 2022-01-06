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
      spacing: {
        "15vw":"15vw",
        
      },
      maxWidth: {
        '4/5': '80%',
      }
    },
  },
  plugins: [],
}
