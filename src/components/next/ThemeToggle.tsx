import { FC } from 'react';
import { IconMoon, IconSun } from '@tabler/icons';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/elements';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      as={motion.button}
      onClick={() => {
        // Add the transition before the switching happens, so we dont get a weird flash of transition at the start
        document.documentElement.style.transition =
          'background-color 0.5s ease-in-out';
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      css={{
        width: '3em',
        height: '3em',
        borderRadius: '$rounded',
        position: 'fixed',
        zIndex: '$1',
        backgroundColor: '$bgMain',
        dropShadow: '$blur',
        top: '5%',
        right: '5%',
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9, rotate: 100 }}
    >
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </Button>
  );
};

export default ThemeToggle;
