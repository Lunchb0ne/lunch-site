import { Flexbox } from '../layout';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons';
import FancyText from './FancyText';

export function Title() {
  const iconDim = '1.5em';

  return (
    <>
      <Flexbox gap="$lg">
        {/* <DynamicFancyText /> */}
        <FancyText />
      </Flexbox>
      <Flexbox justifyContent="start" gap="$md">
        <IconBrandGithub width={iconDim} height={iconDim} />
        <IconBrandLinkedin width={iconDim} height={iconDim} />
        <IconMail width={iconDim} height={iconDim} />
      </Flexbox>
      <br />
    </>
  );
}
