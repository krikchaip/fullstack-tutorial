const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
  addBase({
    '@font-face': {
      fontFamily: 'NotoSans',
      fontWeight: 400,
      fontStyle: 'normal',
      src: `url('/font/NotoSans/NotoSans-Regular.ttf')`
    }
  })

  addBase({
    '@font-face': {
      fontFamily: 'NotoSans',
      fontWeight: 400,
      fontStyle: 'italic',
      src: `url('/font/NotoSans/NotoSans-Italic.ttf')`
    }
  })

  addBase({
    '@font-face': {
      fontFamily: 'NotoSans',
      fontWeight: 700,
      fontStyle: 'normal',
      src: `url('/font/NotoSans/NotoSans-Bold.ttf')`
    }
  })

  addBase({
    '@font-face': {
      fontFamily: 'NotoSans',
      fontWeight: 700,
      fontStyle: 'italic',
      src: `url('/font/NotoSans/NotoSans-BoldItalic.ttf')`
    }
  })
})
