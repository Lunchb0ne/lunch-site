// https://stitches.dev/docs/composing-components
import { styled } from '@/lib/stitches/';

export const Button = styled('button', {
  border: '0',
  variants: {
    rounded: {
      true: {
        borderRadius: '$rounded',
      },
    },
    outline: {
      true: {
        border: `1px solid ${'$grayA12'}`,
      },
    },
  },
});
