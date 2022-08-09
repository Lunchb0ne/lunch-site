import { transparentize as transparentizePolished } from 'polished';
import { LiteralUnion } from 'type-fest';

import { lightThemeColors as colors } from '@/lib/stitches/colors';
import { Color } from '@/types/color';

import hasKey from './hasKey';

/**
 * Decreases the opacity of a color.
 *
 * @param color Supports both theme colors (like 'red100') and regular colors ('#123' and 'red')
 * @param opacity A number between 0 to 1
 *
 * @example
 * // Usage
 * const Box = styled('div', {`
 *   background: ${transparentize('#fff', 0.9)};
 *   background: ${transparentize('green500', 0.8)};
 *   background: ${transparentize('rgba(255, 0, 0, 0.7)', 0.4)},
 * });`
 *
 * // CSS Output
 * .someClassHash {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(34,197,94,0.8)";
 *   background: "rgba(255,0,0,0.1)"; // This one is weird. It basically does 0.1 = 0.7 - (1 - 0.4)
 * }
 */
const transparentize = (
  color: keyof typeof colors | Color,
  opacity: number
): string => {
  // With transparentizePolished(), the higher the opacity number, the more
  // transparent it'll be. This is confusing to me, as it's the opposite
  // of how opacity normally works in CSS. Thus I've inverted the number
  // to make it behave more like normal CSS.
  const invertedOpacity = 1 - opacity;

  if (hasKey(colors, color)) {
    return transparentizePolished(invertedOpacity, colors[color]);
  }

  return transparentizePolished(invertedOpacity, color);
};

export default transparentize;
