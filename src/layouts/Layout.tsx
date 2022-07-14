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

const MainContainer = styled(Box, {
  mx: '8%',
  my: 'auto',
  mt: '5%',
  '@initial': { mx: '5%' },
  '@sm': { mx: '18%' },
});

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      {/* Add those Cool gradients for bg */}
      <NosSSRGradients />
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
