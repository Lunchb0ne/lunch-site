import Dragger from 'react-physics-dragger';
import { Card } from './Card';

const DraggerComp = () => {
  const tech = [
    '/hero/react.svg',
    '/hero/nextjs.svg',
    'Solid',
    '/hero/vue.svg',
    'Svelte',
    'C++',
    'Rust',
    '/hero/nuxtjs.svg',
    '/hero/graphql.svg',
  ];
  return (
    <section className="section">
      <Dragger
        style={{
          marginBottom: '2rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        {tech.map((item, i) => (
          <Card key={`${i}`} Icon={item} />
        ))}
      </Dragger>
    </section>
  );
};

export default DraggerComp;
