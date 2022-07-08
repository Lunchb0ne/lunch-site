import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import leftGradientDark from 'public/gradient/gradient-left-dark.svg';
import leftGradientLight from 'public/gradient/gradient-left-light.svg';
import rightGradientDark from 'public/gradient/gradient-right-dark.svg';
import rightGradientLight from 'public/gradient/gradient-right-light.svg';
import { StyledImage } from '@/components/elements/Image';
import { appears } from '@/lib/utils/animations';

export default function Gradients() {
  const { theme } = useTheme();
  const isDark = () => theme === 'dark';
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted && (
        <div id="gradients">
          <StyledImage
            src={isDark() ? leftGradientDark : leftGradientLight}
            alt={`gradient ${isDark() ? 'blue' : 'orange'} background`}
            css={{
              display: 'block',
              opacity: 0,
              position: 'fixed',
              zIndex: '-200',
              bottom: '-50%',
              left: '-10%',
              right: '-50%',
              animation: `${appears} 200ms 100ms ease forwards`,
            }}
          />
          <StyledImage
            src={isDark() ? rightGradientDark : rightGradientLight}
            alt={`gradient violet background`}
            priority
            css={{
              display: 'block',
              top: 0,
              zIndex: '-200',
              opacity: 0,
              position: 'fixed',
              animation: `${appears} 200ms 100ms ease forwards`,
              '@lg': {
                top: '-50%',
                right: '-50%',
              },
              '@mdMax': {
                top: '-35%',
                right: '-45%',
              },
            }}
          />
        </div>
      )}
    </>
  );
}
