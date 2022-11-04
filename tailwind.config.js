const colors = require('tailwindcss/colors')
const withModfyTailwindConfig =
  require('./dist/tailwind.config.cjs').withModfyTailwindConfig

module.exports = withModfyTailwindConfig({
  purge: ['**/*.tsx'],
  theme: {
    extend: {
      colors: {
        orange: colors.orange
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
})
