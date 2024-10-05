/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  maxWidth: {
       container: '1280px',
    }, fontFamily: {
      roboto: ['Roboto Condensed', ' sans-serif',],
       
    }, backgroundImage: {
       banner: "url('./images/bannerimage.jpg')",
       visit: "url('./images/background.jpg')"
       
    },  colors: {
      primary: '#FFD2A4'
    },},
  },
  plugins: [],
}

