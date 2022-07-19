import DraggerComp from '@/components/Dragger/Dragger';
import SlideUp from '@/components/animations/slideUp';
import { Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { getLayout } from '@/layouts/Layout';

function Index() {
  return (
    <>
      <Box>
        <Text
          h4
          font="$sans"
          css={{
            textShadow: '$soft',
            mr: '15%',
            '@smMax': {
              mr: '5%',
            },
            mt: 0,
            mb: '5%',
          }}
        >
          Hello! ¡Holá! Bonjour!
          <br />
          <br />
          I&apos;m Abhishek, a Dublin based Software Developement Engineer.
          Exploring and working on the Edge (quite literally) of Typescript,
          React, Solid and Svelte.
        </Text>
        <SlideUp>Tech I Use</SlideUp>
        <hr />
        <DraggerComp />
      </Box>
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
