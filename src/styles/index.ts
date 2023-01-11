import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      red500: '#EF5454',

      purpleCodify500: '#9F6CFD',
      purpleCodify700: '#322659',
      purpleCodify900: '#1F0E3F',
      purpleCodify900B: '#170A2E',

      blue500: '#2176FF',

      gray200: '#E2E8F0',
      gray400: '#A0AEC0',

      green400: '#48BB78',

      yellow500: '#FFB83D',
    },
  },
})
