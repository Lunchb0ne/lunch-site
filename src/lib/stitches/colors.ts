import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  mauve,
  red,
  redDark,
} from '@radix-ui/colors';

const lightThemeColors = {
  ...gray,
  ...blue,
  ...red,
  ...green,

  bgMain: gray.gray1,
  fgMain: mauve.mauve12,
  accent: red.red6,
};
const darkThemeColors = {
  ...grayDark,
  ...blueDark,
  ...redDark,
  ...greenDark,

  bgMain: gray.gray1,
  fgMain: mauve.mauve12,
  accent: red.red6,
};

export { lightThemeColors, darkThemeColors };
