import type { NextPage } from 'next';
import Head from 'next/head';

import { getLayout } from '@/layouts/Layout';
import { styled } from '@/lib/stitches';
import createShadow from '@/lib/utils/createShadow';
import desaturate from '@/lib/utils/desaturate';
import { ComponentWithLayout } from '@/types/utils';

const Box = styled('div');

const Square = styled('div', {
  background: 'white',
  borderRadius: '8px',
  size: '$24',
});

const Wrapper = styled('div', {
  width: '100%',
  background: '$gray5',
  p: '$10',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '$8',
});

const Home: ComponentWithLayout<NextPage> = () => {
  return (
    <Box
      css={{
        maxWidth: '$256',
        mx: 'auto',
        mt: '$10',
        p: '$5',
      }}
    >
      <Head>
        <title>Component Testing</title>
        <meta
          name="description"
          content="Component Testing - An starter kit using Next and Stitches"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Component Testing</h1>

        <Box
          css={{
            background: '$gray2',
            p: '12px',
            mt: '$4',

            '@l1': {
              background: '$gray9',
              color: 'white',
            },
          }}
        >
          This box changes color depending on breakpoint
        </Box>

        <Wrapper>
          <Square css={{ boxShadow: '$sm' }} />
          <Square css={{ boxShadow: '$md' }} />
          <Square css={{ boxShadow: '$lg' }} />
        </Wrapper>

        <Wrapper css={{ background: '$slate4' }}>
          <Square css={{ boxShadow: '$sm' }} />
          <Square css={{ boxShadow: '$md' }} />
          <Square css={{ boxShadow: '$lg' }} />
        </Wrapper>
        <Wrapper css={{ background: '$slate4' }}>
          <Square css={{ boxShadow: createShadow('small', 'slate5') }} />
          <Square css={{ boxShadow: createShadow('medium', 'slate5') }} />
          <Square css={{ boxShadow: createShadow('large', 'slate5') }} />
        </Wrapper>
        <Wrapper css={{ background: '$slate4' }}>
          <Square
            css={{
              boxShadow: createShadow('small', desaturate('slate5', 0.4)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', desaturate('slate5', 0.4)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', desaturate('slate5', 0.4)),
            }}
          />
        </Wrapper>

        <Wrapper css={{ background: '$blue5' }}>
          <Square css={{ boxShadow: '$small' }} />
          <Square css={{ boxShadow: '$medium' }} />
          <Square css={{ boxShadow: '$large' }} />
        </Wrapper>
        <Wrapper css={{ background: '$blue5' }}>
          <Square css={{ boxShadow: createShadow('small', 'blue5') }} />
          <Square css={{ boxShadow: createShadow('medium', 'blue5') }} />
          <Square css={{ boxShadow: createShadow('large', 'blue5') }} />
        </Wrapper>
        <Wrapper css={{ background: '$blue5' }}>
          <Square
            css={{
              boxShadow: createShadow('small', desaturate('blue5', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', desaturate('blue5', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', desaturate('blue5', 0.3)),
            }}
          />
        </Wrapper>

        <Wrapper css={{ background: '$red5' }}>
          <Square css={{ boxShadow: '$small' }} />
          <Square css={{ boxShadow: '$medium' }} />
          <Square css={{ boxShadow: '$large' }} />
        </Wrapper>
        <Wrapper css={{ background: '$red5' }}>
          <Square
            css={{
              boxShadow: createShadow('small', 'red6'),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', 'red6'),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', 'red6'),
            }}
          />
        </Wrapper>
        <Wrapper css={{ background: '$red5' }}>
          <Square
            css={{
              boxShadow: createShadow('small', desaturate('red6', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('medium', desaturate('red6', 0.3)),
            }}
          />
          <Square
            css={{
              boxShadow: createShadow('large', desaturate('red6', 0.3)),
            }}
          />
        </Wrapper>
      </main>
    </Box>
  );
};

Home.getLayout = getLayout;
export default Home;
