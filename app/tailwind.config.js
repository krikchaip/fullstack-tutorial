const tsconfig = require('./tsconfig.json')

const dirs = Object.keys(tsconfig.compilerOptions.paths).map(path =>
  path.replace('/*', '')
)

module.exports = {
  purge: [`./{${dirs.join(',')}}/**/*.{ts,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
