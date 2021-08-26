const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase }) => {
  addBase({
    body: {
      overflow: 'hidden'
    }
  })
})
