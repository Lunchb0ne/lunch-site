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
        <SlideUp>Some Things I Wrote</SlideUp>
        <hr />
        <Text h4 font="$sans">
          <ul>
            <li>
              <a
                href="https://vdlms.lunchb0ne.me"
                rel="noreferrer"
                target="_blank"
              >
                OnFlix
              </a>
            </li>
            I Just wanted a reason to mess around with Nuxt and Vue, It turned
            out pretty good. Firebase + Nuxt is a great DX!
            <li>
              <a
                href="https://bad-day.lunchb0ne.me"
                rel="noreferrer"
                target="_blank"
              >
                I&apos;m Having a Really Really Bad Day
              </a>
            </li>
            This was me making an excuse just to look at cat pics and hack
            around in SolidJS
          </ul>
        </Text>
      </Box>
    </>
  );
}

Index.getLayout = getLayout;

export default Index;
