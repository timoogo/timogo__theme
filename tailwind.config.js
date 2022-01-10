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
      zIndex:{
        '1':"1",
      },
      boxShadow: {
        'shadow-main': '0px 12px 24px rgba(137, 130, 130, 0.17);',
      },
      flex: {
        '1-0->1/5': '1 0 21%',
      },
      inset: {
        'team_on-hover': '-5vh 25% 25% 0',
      },
      transitionProperty: {
       "team-hover-image":"translate(-3.5rem, -3.5rem)",
       "team-hover-content":"translate(3.5rem, 3.5rem)",
      },
      keyframes: {
        teamImg: {
          '0%, 100%': { transform: 'translate(-3.5rem, -3.5rem)' },
        },
        teamText: {
          '0%, 100%': { transform: 'translate(3.5rem, -3.5rem)' },
        },

      },
      spacing: {
        "5vh":"5vh",
        "15vw":"15vw",
        "25vh": "25vh",
        "2/5": "40%",
        "1/10": "10%",
        "3/10": "30%",
        "9/10": "90%",
        "9/10vh": "90vh",
        "15/10": "150vh",
        
      },
      maxWidth: {
        '4/5': '80%',
        "3/10":"30vw",
      },
      maxHeight:{
        "200px":"200px"
      }
    },
  },
  plugins: [],
}
