import { Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { Flexbox } from '@/components/layout';
import { getLayout } from '@/components/layouts/Layout';

// http://localhost:3000/?pokemon=[query] (or pikachu by default)
function Index() {
  const { isDark, type } = useTheme();
  const { setTheme } = useNextTheme();

  return (
    <Flexbox justifyContent flexDirection="column" css={{ mx: '15%' }}>
      <Text h3>Second page is also: {type}</Text>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </Flexbox>
  );
}

Index.getLayout = getLayout;

export default Index;
