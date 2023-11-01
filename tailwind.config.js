/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashdisplay: ['CLASHDISPLAY', ],
        clashdisplaybold: ['CLASHDISPLAYBOLD', ],
        clashdisplaylight: ['CLASHDISPLAYLIGHT', ],
        clashdisplaysemibold: ['CLASHDISPLAYSEMIBOLD', ],
      }
    },
    colors: {
      primary: '#FDBB11',
      secondary: '#231F20',
      white: '#fff',
      black: '#231F20',
    },
  },
  plugins: [],
}

