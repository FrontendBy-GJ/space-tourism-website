/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
      },
      backgroundImage: {
        'mobile-bg': "url('/assets/home/background-home-mobile.jpg')",
        'tablet-bg': "url('/assets/home/background-home-tablet.jpg')",
        'desktop-bg': "url('/assets/home/background-home-desktop.jpg')",
        'destination-mobile-bg':
          "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet-bg':
          "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop-bg':
          "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile-bg': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet-bg': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop-bg': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile-bg':
          "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet-bg':
          "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop-bg':
          "url('/assets/technology/background-technology-desktop.jpg')",
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
