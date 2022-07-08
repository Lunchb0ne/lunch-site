import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';
import { Box, Flexbox, Grid } from '../layout';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
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
        <GitHubLogoIcon width={iconDim} height={iconDim} />
        <LinkedInLogoIcon width={iconDim} height={iconDim} />
        <PersonIcon width={iconDim} height={iconDim} />
      </Flexbox>
      <br />
    </>
  );
}
