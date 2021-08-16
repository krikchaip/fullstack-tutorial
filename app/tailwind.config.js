const plugin = require('tailwindcss/plugin')
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
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
