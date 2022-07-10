import { useTheme } from 'next-themes';
import Dragger from '@/components/Dragger/Dragger';
import { Button, Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { getLayout } from '@/layouts/Layout';

function Index() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Box>
        <Text h1 font={'$cursive'} css={{ dropShadow: '$blur' }}>
          Tech I Like
        </Text>
        <hr />
        <Dragger />
      </Box>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore harum,
        numquam esse incidunt recusandae dolorum alias quibusdam dicta magni
        laudantium provident, fuga quam eveniet cum aliquam maiores sint
        repellendus illum!
      </Text>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non
        facilis rerum recusandae? Cum aliquid dolorem dolores illum at quas
        officia corrupti expedita, illo recusandae impedit iusto tempora,
        asperiores repudiandae?
      </Text>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
        voluptatibus necessitatibus recusandae, est dolorem nihil esse obcaecati
        fugiat aliquid veniam consequuntur amet iusto laborum molestias
        aspernatur eligendi nemo dolore magnam.
      </Text>
      <Button
        outline
        onClick={() => {
          // Add the transition before the switching happens, so we dont get a weird flash of transition at the start
          document.documentElement.style.transition =
            'background-color 0.5s ease-in-out';
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        Change Theme!
      </Button>
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
