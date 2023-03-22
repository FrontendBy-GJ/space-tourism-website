/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
      },
      backgroundImage: {
        'mobile-bg': "url('/src/assets/home/background-home-mobile.jpg')",
        'tablet-bg': "url('/src/assets/home/background-home-tablet.jpg')",
        'desktop-bg': "url('/src/assets/home/background-home-desktop.jpg')",
      },
      colors: {
        light: '#D0D6F9',
        dark: '##0B0D17',
      },
    },
    fontFamily: {
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      barlow: ['Barlow', 'sans-serif'],
      bellefair: ['Bellefair', 'serif'],
    },
  },
  plugins: [],
};
