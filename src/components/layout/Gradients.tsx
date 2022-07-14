import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import leftGradientDark from 'public/gradient/gradient-left-dark.svg';
import leftGradientLight from 'public/gradient/gradient-left-light.svg';
import rightGradientDark from 'public/gradient/gradient-right-dark.svg';
import rightGradientLight from 'public/gradient/gradient-right-light.svg';
import { StyledImage } from '@/components/elements/Image';
import { appears } from '@/lib/utils/animations';
import { Box } from './Box';

const Gradients: React.FC<{}> = () => {
  const { theme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);
  return (
    <>
      <Box id="gradients" css={{ zIndex: '-200', position: 'fixed' }}>
        <StyledImage
          src={isDark ? rightGradientDark : rightGradientLight}
          alt={`gradient violet background`}
          priority
          css={{
            display: 'block',
            // top: 0,
            zIndex: '$neg',
            opacity: 0,
            position: 'fixed',
            width: 'auto',
            top: '-20%',
            right: '-40%',
            minWidth: '500px',
            animation: `${appears} 800ms 200ms ease forwards`,
            '@xl': {
              top: '-50%',
              right: '-50%',
            },
            '@md': {
              top: '-35%',
              right: '-40%',
            },
            '@xs': {
              top: '-35%',
              right: '-40%',
            },
          }}
        />
        <StyledImage
          src={isDark ? leftGradientDark : leftGradientLight}
          alt={`gradient ${isDark ? 'blue' : 'orange'} background`}
          priority
          css={{
            display: 'block',
            opacity: 0,
            position: 'fixed',
            zIndex: '$neg',
            width: 'auto',
            bottom: '-10%',
            left: '-30%',
            minWidth: '500px',
            animation: `${appears} 800ms 200ms ease forwards`,
            '@sm': {
              bottom: '-20%',
              left: '-15%',
            },
            '@md': {
              bottom: '-35%',
              // left: '-40%',
            },
            '@lg': {
              bottom: '-50%',
              // left: '-50%',
            },
          }}
        />
      </Box>
    </>
  );
};

export default Gradients;
