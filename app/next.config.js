const tsconfig = require('./tsconfig.json')

module.exports = {
  eslint: {
    dirs: Object.keys(tsconfig.compilerOptions.paths).map(path =>
      path.replace('/*', '')
    )
  }
}
