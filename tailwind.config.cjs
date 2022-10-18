/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#F40404',
        para: '#6C6C6C',
        yellowborder: '#FFB800',
        overlay: 'rgba(0,0,0,.6)',
      },
      maxWidth: {
        container: '1144px',
      },
      backgroundImage: {
        banner: 'url("./assets/images/banner.png")',
      },
    },
  },
  plugins: [],
};
