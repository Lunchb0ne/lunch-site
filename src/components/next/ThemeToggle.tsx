import { FC } from 'react';
import { IconMoon, IconSun } from '@tabler/icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/elements';

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      outline
      onClick={() => {
        // Add the transition before the switching happens, so we dont get a weird flash of transition at the start
        document.documentElement.style.transition =
          'background-color 0.5s ease-in-out';
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      css={{ borderRadius: '$rounded' }}
    >
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </Button>
  );
};

export default ThemeToggle;
