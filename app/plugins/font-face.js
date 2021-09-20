const plugin = require('tailwindcss/plugin')

// TODO: NotoSans 300, NotoSans 500, NotoSans 600
module.exports = plugin(({ addBase }) => {
  const NotoSans = () => {
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
  }

  const Poppins = () => {
    addBase({
      '@font-face': {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontStyle: 'normal',
        src: `url('/font/Poppins/Poppins-Regular.ttf')`
      }
    })

    addBase({
      '@font-face': {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontStyle: 'normal',
        src: `url('/font/Poppins/Poppins-Medium.ttf')`
      }
    })

    addBase({
      '@font-face': {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontStyle: 'normal',
        src: `url('/font/Poppins/Poppins-SemiBold.ttf')`
      }
    })
  }

  NotoSans()
  Poppins()
})
