import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
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
  my: 'auto',
  pt: '5%',
  mx: '10%',
  '@smMax': { pt: '1%', mx: '6%' },
});

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      {/* Add those Cool gradients for bg */}
      <NosSSRGradients />
      {/* A Floating theme switcher */}
      <NosSSRToggle />
      {/* Main App container */}
      <Flexbox
        id="app-container"
        flexDirection="column"
        justifyContent="start"
        css={{ overflowY: 'hidden' }}
      >
        <MainContainer as="main" id="main-container">
          <Title />
          {children}
        </MainContainer>
      </Flexbox>
    </>
  );
};

export const getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export { Layout };
