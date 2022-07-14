// https://www.radix-ui.com/docs/colors/getting-started/usage#stitches
import {
  blue,
  blueA,
  blueDark,
  blueDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  mauve,
  red,
  redA,
  redDark,
  redDarkA,
  slateDark,
} from '@radix-ui/colors';
import { createTheme } from '@/lib/stitches';

export const light = createTheme({
  colors: {
    ...gray,
    ...grayA,
    ...blue,
    ...blueA,
    ...red,
    ...redA,
    ...green,
    ...greenA,
    bgMain: gray.gray1,
    fgMain: mauve.mauve12,
    accent: red.red6,
  },
});

export const dark = createTheme({
  colors: {
    ...grayDark,
    ...grayDarkA,
    ...blueDark,
    ...blueDarkA,
    ...redDark,
    ...redDarkA,
    ...greenDark,
    ...greenDarkA,
    bgMain: grayDark.gray1,
    fgMain: slateDark.slate12,
    accent: blueDark.blue6,
  },
});
