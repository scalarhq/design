import { Config as TailwindConfig } from 'tailwindcss'
import colors from 'tailwindcss/colors'

import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import lineClamp from '@tailwindcss/line-clamp'
import typography from '@tailwindcss/typography'

export const withModfyTailwindConfig = (
  config: TailwindConfig
): TailwindConfig => {
  // Modify config here

  const theme: TailwindConfig['theme'] = {
    extend: {
      ...config.theme?.extend,
      colors: {
        ...config.theme?.extend?.colors,
        'midnightPurple-100': '#FBFDFE',
        midnightPurple: '#5850EC',
        'midnightPurple-500': '#5850EC',
        'midnightPurple-900': '#060414',
        orange: colors.orange,
        teal: colors.teal,
        blueGray: { ...colors.slate, 1000: '#0C1322' },
        amber: colors.amber,
        coolGray: colors.gray,
        lime: colors.lime,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet
      },
      fontFamily: {
        inter: ['Inter'],
        bebasNeue: ['Bebas Neue', 'cursive'],
        dmSans: ['DM Sans', 'sans-serif'],
        ebGaramond: ['EB Garamond', 'serif'],
        niconne: ['Niconne', 'cursive'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        eudoxus: [`'Eudoxus Sans'`]
      }
    }
  }

  const corePlugins: TailwindConfig['corePlugins'] = {
    ...config.corePlugins,
    aspectRatio: false
  }

  const plugins: TailwindConfig['plugins'] = [
    ...(config.plugins || []),
    forms,
    aspectRatio,
    lineClamp,
    typography
  ]

  return {
    ...config,
    theme,
    corePlugins,
    plugins
  }
}
