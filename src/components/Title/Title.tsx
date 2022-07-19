import dynamic from 'next/dynamic';
import { Flexbox } from '../layout';
import { LayoutGroup } from 'framer-motion';
import ConnectIcons from './ConnectIcons';
import FancyText from './FancyText';

export function Title() {
  return (
    <LayoutGroup>
      <Flexbox
        css={{
          gap: '$lg',
          '@smMax': {
            gap: '0',
            flexDirection: 'column',
          },
        }}
      >
        <FancyText />
      </Flexbox>
      <Flexbox justifyContent="start" gap="$md">
        <ConnectIcons />
      </Flexbox>
      <br />
    </LayoutGroup>
  );
}
