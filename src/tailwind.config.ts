import { Config as TailwindConfig } from 'tailwindcss'

import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import lineClamp from '@tailwindcss/line-clamp'
import typography from '@tailwindcss/typography'

import stackedLayer from './plugins/stackedLayer'

type Color = {
  50?: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  1000?: string
}

const Amethyst: Color = {
  50: '#FBF9FF',
  100: '#EEE3FF',
  200: '#D1B7FF',
  300: '#AF81FF',
  400: '#9456FF',
  500: '#7E33FF',
  600: '#3E06A1',
  700: '#2D0573',
  800: '#1E0052',
  900: '#0D0B1B',
  1000: '#060414'
}

const BluePurple: Color = {
  50: '#e1dcf6',
  100: '#a093cb',
  200: '#7a65ba',
  300: '#624ca7',
  400: '#51408f',
  500: '#413077',
  600: '#362c63',
  700: '#2c2850',
  800: '#23203e',
  900: '#191533'
}

const colorToObject = (name: string, color: Color) => {
  const obj: Record<string, string> = {}
  Object.entries(color).forEach(([key, value]) => {
    obj[`${name}-${key}`] = value
  })
  return obj
}

export const withModfyTailwindConfig = (
  config: TailwindConfig
): TailwindConfig => {
  // Modify config here

  const theme: TailwindConfig['theme'] = {
    extend: {
      ...config.theme?.extend,
      colors: {
        ...config.theme?.extend?.colors,
        ...colorToObject('amethyst', Amethyst),
        ...colorToObject('blue-purple', BluePurple)
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

  const plugins: TailwindConfig['plugins'] = [
    ...(config.plugins || []),
    forms,
    aspectRatio,
    lineClamp,
    typography,
    stackedLayer
  ]

  return {
    ...config,
    theme,
    plugins
  }
}
