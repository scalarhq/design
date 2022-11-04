# Modfy Design Extras

Here are where we stores custom tailwind properties, colors, etc.

And logos, icons, etc.


## Usage

```bash
pnpm install @modfy/design
```

```js
// tailwind.config.js
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
```

## Dev

Add tailwind customization to `tailwind.config.ts`

```bash
pnpm build - to update tailwind config
```

Use `App.tsx` to play with your changes and styles
```bash
pnpm dev
```