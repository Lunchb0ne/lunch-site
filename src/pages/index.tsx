import { Container, Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { getLayout } from '@/components/layouts/Layout';

// http://localhost:3000/?pokemon=[query] (or pikachu by default)
function Index() {
  const { isDark, type } = useTheme();
  const { setTheme } = useNextTheme();

  return (
    <Container css={{ mx: '15%' }}>
      <Text h3>Current theme is: {type}</Text>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </Container>
  );
}

Index.getLayout = getLayout;

export default Index;
