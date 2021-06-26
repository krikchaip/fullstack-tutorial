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
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
