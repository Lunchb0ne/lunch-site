import { ComponentProps, ElementType, ForwardedRef, forwardRef } from 'react';

import { BoxProps } from '@/components/layout';
import { CSS, styled } from '@/lib/stitches';

const StyledComponent = styled('div');
interface FlexboxProps {
  flexDirection?: CSS['flexDirection'];
  justifyContent?: CSS['justifyContent'] | boolean;
  alignItems?: CSS['alignItems'] | boolean;
  gap?: CSS['gap'];
}

const StyledFlexbox = <T extends ElementType = 'div'>(
  {
    as,
    css,
    border,
    boxShadow,
    dropShadow,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    ...rest
  }: FlexboxProps & BoxProps<T> & ComponentProps<T>,
  ref: ForwardedRef<ElementType>
) => (
  <StyledComponent
    {...rest}
    {...{ ref, as }}
    css={{
      ...css,
      flexDirection,
      display: 'flex',
      resolveCSSProperties: [
        { alignItems, trueValue: 'center' },
        { justifyContent, trueValue: 'center' },
        { border, trueValue: 'solid $gray8' },
        { boxShadow, trueValue: '$soft' },
        { dropShadow, trueValue: '$blur' },
        { gap, trueValue: '$initial' },
      ],
    }}
  />
);

export const Flexbox = forwardRef(StyledFlexbox);
