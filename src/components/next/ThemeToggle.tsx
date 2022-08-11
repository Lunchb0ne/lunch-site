import { FC } from 'react';

import { IconMoon, IconSun } from '@tabler/icons';
import { LazyMotion, Variants, domAnimation, m } from 'framer-motion';
import { useTheme } from 'next-themes';

import { Button } from '@/components/elements';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();

  // Apply variants to only the icon part to prevent shadow from rotating
  const iconVariants: Variants = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95, rotate: 100 },
  };

  const buttonVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <Button
        as={m.button}
        whileHover="whileHover"
        whileTap="whileTap"
        initial="initial"
        animate="animate"
        variants={buttonVariants}
        onClick={() => {
          // Add the transition before the switching happens, so we dont get a weird flash of transition at the start
          document.documentElement.style.transition =
            'background-color 0.5s ease-in-out';
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
        css={{
          width: '3em',
          height: '3em',
          borderRadius: '$full',
          position: 'fixed',
          zIndex: '10',
          backgroundColor: '$gray3',
          dropShadow: '$drop',
          top: '5%',
          right: '5%',
        }}
      >
        <m.div variants={iconVariants}>
          {theme === 'light' ? <IconMoon /> : <IconSun />}
        </m.div>
      </Button>
    </LazyMotion>
  );
};

export default ThemeToggle;
