const tsconfig = require('./tsconfig.json')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: {
    dirs: Object.keys(tsconfig.compilerOptions.paths).map(path =>
      path.replace('/*', '')
    )
  },
  webpack: config => {
    // let you import SVG as a React component
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}
