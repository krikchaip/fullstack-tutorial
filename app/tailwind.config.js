const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig}*/
module.exports = {
  darkMode: false,
  theme: {
    screens: {
      'mobile-s': '320px',
      'mobile-m': '375px',
      'mobile-l': '425px',
      tablet: '768px',
      laptop: '1024px',
      'laptop-l': '1440px'
    },
    extend: {
      fontFamily: {
        notosans: ['NotoSans', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    ...require('./plugins')
  ]
}
