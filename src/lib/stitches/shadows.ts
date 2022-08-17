// With lots of help from
// https://www.joshwcomeau.com/css/designing-shadows/

const shadows = {
  sm: '0.5px 1px 1px $colors$blackA4',
  md: [
    '1px 2px 2px $colors$blackA5',
    '2px 4px 4px $colors$blackA5',
    '3px 6px 6px $colors$blackA5',
  ].join(','),
  lg: [
    '1px 2px 2px $colors$blackA4',
    '2px 4px 4px $colors$blackA4',
    '4px 8px 8px $colors$blackA4',
    '8px 16px 16px $colors$blackA4',
    '16px 32px 32px $colors$blackA4',
  ].join(','),
  soft: [
    '0 1px 2px $colors$blackA4',
    '0 2px 4px $colors$blackA4',
    '0 4px 8px $colors$blackA4',
    '0 8px 16px $colors$blackA4',
    '0 16px 32px $colors$blackA4',
    '0 32px 64px $colors$blackA4',
  ].join(','),
} as const;

export const DropShadows = {
  $drop: '1px 2px 4px $colors$blackA8',
  $blur: '0 0 0.75rem $colors$blackA8',
  $shift: '0.35rem 0.35rem 0.4rem $colors$blackA8',
} as const;

export type DropShadow = keyof typeof DropShadows;

export default shadows;
