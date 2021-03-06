export const commonTokens = {
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.875rem',
    xl4: '2.25rem',
    xl5: '3rem',
    xl6: '3.75rem',
    xl7: '4.5rem',
    xl8: '6rem',
    xl9: '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    base: 1.5,
    md: 1.5,
    lg: 1.75,
    xl: 1.75,
    xl2: 2,
    xl3: 2.25,
    xl4: 2.5,
    xl5: 1,
    xl6: 1,
    xl7: 1,
    xl8: 1,
    xl9: 1,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  space: {
    0: '0rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2.25rem',
    px: '1px',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.625rem',
    6: '0.75rem',
    7: '0.875rem',
    8: '1rem',
    9: '1.25rem',
    10: '1.5rem',
    11: '1.75rem',
    12: '2rem',
    13: '2.25rem',
    14: '2.5rem',
    15: '2.75rem',
    16: '3rem',
    17: '3.5rem',
    18: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  radii: {
    xs: '7px',
    sm: '9px',
    md: '12px',
    base: '14px',
    lg: '14px',
    xl: '18px',
    squared: '33%',
    rounded: '50%',
    pill: '9999px',
  },
  zIndices: {
    neg: '-100',
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999',
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px',
  },
  transitions: {
    default: 'all 250ms ease',
    button:
      'background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s',
    avatar: 'box-shadow 0.25s ease 0s, opacity 0.25s ease 0s',
    link: 'opacity 0.25s ease 0s, background 0.25s ease 0s',
    card: 'transform 0.25s ease 0s, filter 0.25s ease 0s, box-shadow 0.25s ease 0s',
    dropdownItem:
      'background 0.25s ease, transform 0.25s ease, color 0.15s ease, box-shadow 0.25s ease 0s',
  },
  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px',
  },
};

export const mediaBreakpoints = {
  xs: `(min-width: ${commonTokens.breakpoints.xs})`,
  sm: `(min-width: ${commonTokens.breakpoints.sm})`,
  md: `(min-width: ${commonTokens.breakpoints.md})`,
  lg: `(min-width: ${commonTokens.breakpoints.lg})`,
  xl: `(min-width: ${commonTokens.breakpoints.xl})`,
  xsMax: `(max-width: ${commonTokens.breakpoints.xs})`,
  smMax: `(max-width: ${commonTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${commonTokens.breakpoints.md})`,
  lgMax: `(max-width: ${commonTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${commonTokens.breakpoints.xl})`,
  motion: '(prefers-reduced-motion: reduce)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};
