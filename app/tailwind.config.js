const defaultTheme = require('tailwindcss/defaultTheme')

const tsconfig = require('./tsconfig.json')

const dirs = Object.keys(tsconfig.compilerOptions.paths).map(path =>
  path.replace('/*', '')
)

/** @type {import('tailwindcss/tailwind-config').TailwindConfig}*/
module.exports = {
  mode: 'jit',
  purge: [`./{${dirs.join(',')}}/**/*.{ts,tsx}`],
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
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    ...require('./plugins')
  ]
}
