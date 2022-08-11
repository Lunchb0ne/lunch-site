import createShadow from '../utils/createShadow';

const shadows = {
  sm: createShadow('small', 'gray12'),
  md: createShadow('medium', 'gray12'),
  lg: createShadow('large', 'gray12'),
  soft: createShadow('soft', 'gray12'),
} as const;

export const DropShadows = {
  $drop: '1px 2px 4px $colors$blackA8',
  $blur: '0 0 0.75rem $colors$blackA8',
  $shift: '0.35rem 0.35rem 0.4rem $colors$blackA8',
} as const;

export type DropShadow = keyof typeof DropShadows;

export default shadows;
