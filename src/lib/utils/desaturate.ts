import { lightThemeColors as colors } from '../stitches/colors';
import { desaturate as desaturatePolished } from 'polished';

import { Color } from '@/types/color';

import hasKey from './hasKey';

/**
 * Decreases the intensity of a color.
 *
 * @param color Supports both theme colors (like 'red100') and regular colors ('#123' and 'red')
 * @param saturation Number between 0 to 1. How much the color intensity should be decreased
 *
 * @example
 * // Usage
 * const Box = styled('div', {`
 *   background: ${desaturate('#CCCD64', 0.2)};
 *   background: ${desaturate('rgba(204,205,100,0.7)', 0.2)};
 * });`
 *
 * // CSS Output
 * .someClassHash {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */
const desaturate = (
  color: keyof typeof colors | Color,
  saturation: number
): Color => {
  if (hasKey(colors, color)) {
    return desaturatePolished(saturation, colors[color]) as Color;
  }
  return desaturatePolished(saturation, color) as Color;
};

export default desaturate;
