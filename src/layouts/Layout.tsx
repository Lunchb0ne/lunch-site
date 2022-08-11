import { ReactNode, Suspense } from 'react';

import dynamic from 'next/dynamic';

import { Title } from '@/components/Title';
import { Box, Flexbox } from '@/components/layout';
import { styled } from '@/lib/stitches';

export interface Props {
  children: ReactNode;
}

const NosSSRGradients = dynamic(() => import('@/components/layout/Gradients'), {
  ssr: false,
});

const NosSSRToggle = dynamic(() => import('@/components/next/ThemeToggle'), {
  ssr: false,
});

const MainContainer = styled(Box, {
  mx: 'auto',
  maxWidth: 640,
  '@xsMax': { mx: '5%' },
});

const BgWithDots = styled(Box, {
  my: 'auto',
  // TODO: Do this in Stitches
  // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
  zIndex: '-20',
});
const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <BgWithDots>
      {/* Add those Cool gradients for bg */}
      <Suspense>
        <NosSSRGradients />
      </Suspense>
      {/* A Floating theme switcher */}
      <Suspense>
        <NosSSRToggle />
      </Suspense>
      {/* Main App container */}
      <MainContainer as="main" id="main-container">
        {children}
      </MainContainer>
    </BgWithDots>
  );
};

export const getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export { Layout };
