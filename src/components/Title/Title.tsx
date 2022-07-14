import dynamic from 'next/dynamic';
import { Box, Flexbox } from '../layout';
import { motion } from 'framer-motion';
import ConnectIcons from './ConnectIcons';
import FancyText from './FancyText';

const NosSSRToggle = dynamic(() => import('@/components/next/ThemeToggle'), {
  ssr: false,
});

export function Title() {
  return (
    <>
      <Flexbox gap="$lg">
        <FancyText />
        <Box as={motion.div} layout css={{ mx: 'auto', my: 'auto' }}>
          <NosSSRToggle />
        </Box>
      </Flexbox>
      <Flexbox justifyContent="start" gap="$md" css={{ dropShadow: '$blur' }}>
        <ConnectIcons />
      </Flexbox>
      <br />
    </>
  );
}
