/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#00A3FF',
        'blue2': '#B0ECFF',
        'blue3': '#CFF4FF',
        'blue4': '#DDF7FF',
        'blue5': '#65C8FF',
        'blue6': '#569AFF',
        'blue7': '#38B7FF',
        'darkBlue': '#0029AF',
        // 'blue5': '#42BBFF',
        'blackBlue' : '#002936',
        'blueGrey' : '#1B4E5E',

        'dark': '#001D4A',
        'dark2': '#00112C',
        'dark3': '#022863',
        'dark4' : '#00317F',
        'darkBlack' : '#000000',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}