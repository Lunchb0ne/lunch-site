const breakpoints = {
  xs: '650px',
  sm: '960px',
  md: '1280px',
  lg: '1400px',
  xl: '1920px',
} as const;

const media = {
  s1: '(min-width: 23em)',
  s2: '(min-width: 30em)',
  m1: '(min-width: 40em)',
  m2: '(min-width: 50em)',
  m3: '(min-width: 60em)',
  l1: '(min-width: 70em)',
  l2: '(min-width: 80em)',
  l3: '(min-width: 90em)',
} as const;

const mediaBreakpoints = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xsMax: `(max-width: ${breakpoints.xs})`,
  smMax: `(max-width: ${breakpoints.sm})`,
  mdMax: `(max-width: ${breakpoints.md})`,
  lgMax: `(max-width: ${breakpoints.lg})`,
  xlMax: `(max-width: ${breakpoints.xl})`,
  motion: '(prefers-reduced-motion: reduce)',
  safari: 'not all and (min-resolution:.001dpcm)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
};

export { media, breakpoints, mediaBreakpoints };
