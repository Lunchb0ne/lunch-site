import { Flexbox } from '../layout';
import ConnectIcons from './ConnectIcons';
import FancyText from './FancyText';

export function Title() {
  return (
    <>
      <Flexbox gap="$lg">
        <FancyText />
      </Flexbox>
      <Flexbox justifyContent="start" gap="$md">
        <ConnectIcons />
      </Flexbox>
      <br />
    </>
  );
}
