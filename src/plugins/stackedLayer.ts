import plugin from 'tailwindcss/plugin'

const stackedLayer = plugin(({ addUtilities }) => {
  addUtilities({
    '.stackedLayer': {
      'grid-row': '1',
      'grid-column': '1'
    }
  })
})

export default stackedLayer
