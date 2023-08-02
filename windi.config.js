import { defineConfig } from 'windicss/helpers'
import { colors } from './src/constants/colors'
import { breakpointPixel } from './src/constants/breakpointPixel'
import aspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  attributify: true,
  extract: {
    include: ['**/*.{jsx,tsx,css,scss}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    screens: {
      sm: `${breakpointPixel.sm}px`,
      md: `${breakpointPixel.md}px`,
      lg: `${breakpointPixel.lg}px`,
      xl: `${breakpointPixel.xl}px`,
    },
    extend: {
      colors: colors,
    },
  },
  important: true,
  plugins: [require('windicss/plugin/line-clamp'), aspectRatio],
})
