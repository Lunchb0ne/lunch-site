import { lightThemeColors as colors } from '../stitches/colors';

import { Color } from '@/types/color';

import transparentize from './transparentize';

/**
 * Creates a CSS box shadow string.
 *
 * The purpose of this utility is to make it easy to have consistent
 * looking shadows, while still being able to tweak its color.
 *
 * While there is nothing wrong with just using transparent black shadow
 * for everything, the best looking colors use a desaturated version
 * with the same hue as the background.
 *
 * See Josh Comeau' blog post about [color matching shadows](https://www.joshwcomeau.com/css/designing-shadows/#color-matched-shadows) for more.
 *
 * @param size Four sizes are supported - 'soft', 'small', 'medium' and 'large'
 * @param color Both theme colors (gray4) and regular colors are supported (red or #123).
 * @param opacityOverride Optional. While the colors will be made transparent by default, you can override the degree of transparency
 *
 * @example
 * // Usage
 * const Example = styled('div', {
 *  boxShadow: createShadow('small', '#123', 0.9), 
 *  boxShadow: createShadow('medium', 'gray4'),
 * })
 * 
 * 
 * // CSS Output
 * .someClassHash {
 *   box-shadow: 0 1px 1px rgba(17,34,51,0.9);
 *   box-shadow: 0 2px 2px rgba(34,197,94,0.33299999999999996),
                 0 4px 4px rgba(34,197,94,0.33299999999999996),
                 0 8px 8px rgba(34,197,94,0.33299999999999996)
 * }
 */

const createShadow = (
  size: 'small' | 'medium' | 'large' | 'soft',
  color: `${keyof typeof colors}` | Color,
  opacityOverride?: number
): string => {
  if (size === 'small') {
    const opacity = opacityOverride ?? 0.47;
    const transparentColor = transparentize(color, opacity);
    return `0.5px 1px 1px ${transparentColor},`;
  }
  if (size === 'medium') {
    const opacity = opacityOverride ?? 0.41;
    const transparentColor = transparentize(color, opacity);
    return [
      `1 2px 2px ${transparentColor}`,
      `2 4px 4px ${transparentColor}`,
      `3 8px 8px ${transparentColor}`,
    ].join(',');
  }
  if (size === 'large') {
    const opacity = opacityOverride ?? 0.33;
    const transparentColor = transparentize(color, opacity);
    return [
      `1px 2px 2px ${transparentColor}`,
      `2px 4px 4px ${transparentColor}`,
      `4px 8px 8px ${transparentColor}`,
      `8px 16px 16px ${transparentColor}`,
      `16px 32px 32px ${transparentColor}`,
    ].join(',');
  }
  if (size === 'soft') {
    const opacity = opacityOverride ?? 0.18;
    const transparentColor = transparentize(color, opacity);
    return [
      `0 1px 2px ${transparentColor}`,
      `0 2px 4px ${transparentColor}`,
      `0 4px 8px ${transparentColor}`,
      `0 8px 16px ${transparentColor}`,
      `0 16px 32px ${transparentColor}`,
      `0 32px 64px ${transparentColor}`,
    ].join(',');
  }
  throw new Error(`createShadow: ${size} is not an accepted size`);
};

export default createShadow;
