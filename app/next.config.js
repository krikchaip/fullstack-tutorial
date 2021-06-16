// @ts-check

const tsconfig = require('./tsconfig.json')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
module.exports = {
  eslint: {
    dirs: Object.keys(tsconfig.compilerOptions.paths).map(path =>
      path.replace('/*', '')
    )
  }
}
