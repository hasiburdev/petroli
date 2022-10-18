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
        sectionback: '#F0F0F0',
      },
      maxWidth: {
        container: '1144px',
      },
    },
  },
  plugins: [],
};
