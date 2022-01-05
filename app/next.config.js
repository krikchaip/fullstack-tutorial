const tsconfig = require('./tsconfig.json')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: {
    dirs: Object.keys(tsconfig.compilerOptions.paths).map(path =>
      path.replace('/*', '')
    )
  }
}
