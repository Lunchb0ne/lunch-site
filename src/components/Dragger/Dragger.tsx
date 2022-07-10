import { useState } from 'react';
import Dragger from 'react-physics-dragger';
import { Card } from './Card';

const DraggerComp = () => {
  const [disableDragger, setDisableDragger] = useState(false);
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
          zIndex: '2',
        }}
        disabled={disableDragger}
      >
        {tech.map((item, i) => (
          <Card key={`${i}`} Icon={item} stateHandlers={setDisableDragger} />
        ))}
      </Dragger>
    </section>
  );
};

export default DraggerComp;
