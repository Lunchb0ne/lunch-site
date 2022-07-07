import { ReactNode } from 'react';
import { Container } from '@nextui-org/react';
// import Footer from './Footer';
// import Header from './Header';
import Navbar from './Navbar';

export interface Props {
  children: ReactNode;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div id="app-container">
      {/* <Header /> */}
      <Navbar />
      <Container
        lg={true}
        id="main-container"
        display="flex"
        as="main"
        alignContent="space-between"
        className="main-container"
        css={{
          position: 'relative',
          minHeight: '100vh',
          '@mdMax': {
            overflowX: 'hidden',
          },
        }}
      >
        {children}
        {/* <Footer /> */}
      </Container>
    </div>
  );
};

export const getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export { Layout };
