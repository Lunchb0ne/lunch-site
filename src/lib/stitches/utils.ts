import { CSSProperties, PropertyValue } from '@stitches/react';
import { LiteralUnion } from 'type-fest';

const utils = {
  // Margin: Abbreviated properties
  m: (margin: PropertyValue<'margin'>) => ({ margin }),
  mt: (marginTop: PropertyValue<'marginTop'>) => ({ marginTop }),
  mr: (marginRight: PropertyValue<'marginRight'>) => ({ marginRight }),
  mb: (marginBottom: PropertyValue<'marginBottom'>) => ({ marginBottom }),
  ml: (marginLeft: PropertyValue<'marginLeft'>) => ({ marginLeft }),
  mx: (val: PropertyValue<'marginInline'> | string) => {
    if (typeof val === 'string') {
      let [marginLeft, marginRight] = val.trim().split(' ');
      marginRight ??= marginLeft;
      return { marginLeft, marginRight };
    }

    return { marginLeft: val, marginRight: val };
  },
  my: (val: PropertyValue<'marginBlock'> | string) => {
    if (typeof val === 'string') {
      let [marginTop, marginBottom] = val.trim().split(' ');
      marginBottom ??= marginTop;
      return { marginTop, marginBottom };
    }

    return { marginTop: val, marginBottom: val };
  },
  // Padding: Abbreviated properties
  p: (padding: PropertyValue<'padding'>) => ({ padding }),
  pt: (paddingTop: PropertyValue<'paddingTop'>) => ({ paddingTop }),
  pr: (paddingRight: PropertyValue<'paddingRight'>) => ({ paddingRight }),
  pb: (paddingBottom: PropertyValue<'paddingBottom'>) => ({
    paddingBottom,
  }),
  pl: (paddingLeft: PropertyValue<'paddingLeft'>) => ({ paddingLeft }),
  px: (val: LiteralUnion<PropertyValue<'paddingInline'>, string>) => {
    if (typeof val === 'string') {
      let [paddingLeft, paddingRight] = val.trim().split(' ');
      paddingRight ??= paddingLeft;
      return { paddingLeft, paddingRight };
    }

    return { paddingLeft: val, paddingRight: val };
  },
  py: (val: LiteralUnion<PropertyValue<'paddingBlock'>, string>) => {
    if (typeof val === 'string') {
      let [paddingTop, paddingBottom] = val.trim().split(' ');
      paddingBottom ??= paddingTop;
      return { paddingTop, paddingBottom };
    }

    return { paddingTop: val, paddingBottom: val };
  },

  br: (borderRadius: PropertyValue<'borderRadius'>) => ({ borderRadius }),
  bgColor: (backgroundColor: PropertyValue<'backgroundColor'>) => ({
    backgroundColor,
  }),
  rowSpan: (val: number) => ({ gridRow: `${val} span / auto` }),
  columnSpan: (val: number) => ({ gridColumn: `${val} span / auto` }),
  linearGradient: (val: string) => ({
    backgroundImage: `linear-gradient(${val})`,
  }),

  size: (
    val: LiteralUnion<PropertyValue<'width'> | PropertyValue<'height'>, string>
  ) => {
    if (typeof val === 'string') {
      let [width, height] = val.trim().split(' ');
      height ??= width;
      return { width, height };
    }
    return { width: val, height: val };
  },
  resolveCSSProperties: (
    entries: ({ [P in keyof CSSProperties]: CSSProperties[P] | boolean } & {
      trueValue: unknown;
    })[]
  ) =>
    entries.reduce((prev, { trueValue, ...rest }) => {
      const property = Object.entries(rest);
      const [key, val] = property.pop() || [];
      const resolved = val === true ? trueValue : val;
      const entry = val === undefined ? {} : { [key!]: resolved };
      return { ...prev, ...entry };
    }, {}),
} as const;

export default utils;
