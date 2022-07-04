import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Switch } from '@nextui-org/react';
import { Text, useTheme } from '@nextui-org/react';
import axios from 'axios';
import { useTheme as useNextTheme } from 'next-themes';
import { Box, Flexbox, Grid } from '@/components/layout';
import { getLayout } from '@/components/layouts/Layout';

interface Pokemon {
  name: string;
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { other: { home: { front_default: string } } };
}

// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps: GetServerSideProps = async (context) => {
  let {
    query: { pokemon },
  } = context;

  pokemon = pokemon ? pokemon : 'pikachu';

  const {
    data: { name, stats, sprites },
  } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  return { props: { pokemon: { name, stats, sprites } } };
};

// http://localhost:3000/?pokemon=[query] (or pikachu by default)
function Index({ pokemon }: { pokemon: Pokemon }) {
  const { isDark, type } = useTheme();
  const { setTheme } = useNextTheme();

  return (
    <Flexbox justifyContent flexDirection="column" css={{ mx: '15%' }}>
      <Grid gap itemMargin>
        <Box>
          <Text h1 size="2.75rem">
            {pokemon.name}
          </Text>
          {pokemon.stats.map(({ base_stat, stat: { name } }) => (
            <Flexbox
              key={name}
              justifyContent="space-between"
              css={{ minWidth: '15rem' }}
            >
              <Text span size="1.25rem" weight="bold">
                {name}
              </Text>
              <Text span size="1.25rem" weight="bold">
                {base_stat}
              </Text>
            </Flexbox>
          ))}
        </Box>
        <Box dropShadow>
          <Image
            priority
            width={132 * 3}
            height={132 * 3}
            alt={pokemon.name}
            src={pokemon.sprites.other.home.front_default}
          />
        </Box>
      </Grid>
      <Box css={{ textAlign: 'center', my: '3rem' }}>
        <Text h3>Current theme is: {type}</Text>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </Box>
    </Flexbox>
  );
}

Index.getLayout = getLayout;

export default Index;
