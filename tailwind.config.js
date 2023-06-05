/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    screens: {
      lgMax1: {max: '1500px'},
      lgMax: {max: '1300px'},
      lg: {max: '1040px'},
      lg2: {max: '960px'},
      lg3: {max: '990px'},
      md: {max: '790px'},
      sm: {max: '700px'},
      xs: {max: '560px'},
      xs2: {max: '500px'},
    }
  },
  plugins: [],
}

