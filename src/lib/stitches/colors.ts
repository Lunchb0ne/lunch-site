import {
  blackA,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  mauve,
  red,
  redDark,
  whiteA,
} from '@radix-ui/colors';

const lightThemeColors = {
  ...gray,
  ...blue,
  ...red,
  ...green,

  // Important blacks and white
  ...blackA,
  ...whiteA,

  bgMain: gray.gray2,
  fgMain: mauve.mauve12,
  accent: red.red6,
};
const darkThemeColors = {
  ...grayDark,
  ...blueDark,
  ...redDark,
  ...greenDark,

  // Important blacks and white
  ...blackA,
  ...whiteA,

  bgMain: grayDark.gray2,
  fgMain: mauve.mauve1,
  accent: red.red6,
};

export { lightThemeColors, darkThemeColors };
