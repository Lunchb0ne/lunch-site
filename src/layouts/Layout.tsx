import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Title } from '@/components/Title';
import { Box, Flexbox } from '@/components/layout';
import Gradients from '@/components/layout/Gradients';
import { styled } from '@/lib/stitches';

export interface Props {
  children: ReactNode;
}

const MainContainer = styled(Box, {
  as: 'main',
  id: 'main-container',
  mx: '5%',
  my: 'auto',
  '@initial': { mx: '5%' },
  '@sm': { mx: '15%' },
});

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Flexbox id="app-container" flexDirection="column">
      <Gradients />
      <MainContainer>
        <Title />
        <AnimatePresence>{children}</AnimatePresence>
      </MainContainer>
    </Flexbox>
  );
};

export const getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export { Layout };
