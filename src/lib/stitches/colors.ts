import {
  blackA,
  blue,
  blueDark,
  gray,
  grayDark,
  red,
  redDark,
  slate,
  slateDark,
  whiteA,
} from '@radix-ui/colors';

const lightThemeColors = {
  background: 'white',

  subtleBackground: gray.gray2,
  elementBackground: blue.blue3,

  hoverElementBackground: blue.blue4,
  activeElementBackground: blue.blue5,

  subtleBorder: gray.gray6,
  elementBorder: blue.blue7,

  hoveredElementBorder: blue.blue8,

  solidBackground: gray.gray9,
  hoveredSolidBackground: gray.gray10,

  textPrimary: gray.gray12,
  textHighlight: slate.slate12,

  // rest of the color scales
  ...gray,
  ...slate,
  ...blue,
  ...red,
  ...blackA,
  ...whiteA,
};
const darkThemeColors = {
  background: grayDark.gray1,

  subtleBackground: grayDark.gray2,
  elementBackground: blueDark.blue3,

  hoverElementBackground: blueDark.blue4,
  activeElementBackground: blueDark.blue5,

  subtleBorder: grayDark.gray6,
  elementBorder: blueDark.blue7,

  hoveredElementBorder: blueDark.blue8,

  solidBackground: grayDark.gray9,
  hoveredSolidBackground: grayDark.gray10,

  textPrimary: grayDark.gray12,
  textHighlight: slateDark.slate12,

  // rest of the color scales (dark)
  ...grayDark,
  ...slateDark,
  ...blueDark,
  ...redDark,
  ...blackA,
  ...whiteA,
};

export { lightThemeColors, darkThemeColors };
