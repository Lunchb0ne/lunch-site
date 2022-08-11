import { CSS as StitchesCSS, createStitches } from '@stitches/react';

import { darkThemeColors, lightThemeColors } from './colors';
import fonts from './fonts';
import letterSpacings from './letterSpacings';
import lineHeights from './lineHeights';
import { breakpoints, media, mediaBreakpoints } from './media';
import radii from './radii';
import shadows from './shadows';
import { sizes, zIndices } from './sizes';
import utils from './utils';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  reset,
  config,
} = createStitches({
  theme: {
    colors: { ...lightThemeColors },
    fonts,
    letterSpacings,
    lineHeights,
    zIndices,
    space: sizes,
    sizes,
    radii,
    shadows,
    breakpoints,
  },
  media: {
    ...media,
    ...mediaBreakpoints,
  },
  utils,
});

export const darkTheme = createTheme('dark-theme', {
  colors: { ...darkThemeColors },
});

// https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/#dynamic-viewport
export const applyGlobalCSS = globalCss({
  '@font-face': [
    { fontFamily: 'Migur', src: "url('/fonts/Migur.otf')" },
    { fontFamily: 'SaintGeorge', src: "url('/fonts/SaintGeorge.ttf')" },
  ],

  html: { bgColor: '$bgMain', color: '$fgMain' },
  body: { height: '100dvh', fontFamily: '$sans' },
  '#__next': { height: '100vh' },
  '#__next > div': { minHeight: '100%' },
});

export type CSS = StitchesCSS<typeof config>;
