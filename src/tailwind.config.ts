import { Config as TailwindConfig } from 'tailwindcss'

export const withModfyTailwindConfig = (
  config: TailwindConfig
): TailwindConfig => {
  // Modify config here

  const theme: TailwindConfig['theme'] = {
    extend: {
      colors: {
        ...config.theme?.extend?.colors,
        midnightPurple: '#060414'
      }
    }
  }

  return {
    ...config,
    theme
  }
}
