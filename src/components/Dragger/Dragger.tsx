import { useState } from 'react';
import Dragger from 'react-physics-dragger';
import { Card } from './Card';
import {
  GraphqlIcon,
  NextIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  SvelteIcon,
} from './icons';

const DraggerComp = () => {
  const [disableDragger, setDisableDragger] = useState(false);

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
        <Card stateHandlers={setDisableDragger}>
          <ReactIcon />
        </Card>
        <Card stateHandlers={setDisableDragger}>
          <NextIcon />
        </Card>
        <Card stateHandlers={setDisableDragger}>
          <RustIcon />
        </Card>
        <Card stateHandlers={setDisableDragger}>
          <GraphqlIcon />
        </Card>
        <Card stateHandlers={setDisableDragger}>
          <SvelteIcon />
        </Card>
        <Card stateHandlers={setDisableDragger}>
          <PythonIcon />
        </Card>
      </Dragger>
    </section>
  );
};

export default DraggerComp;
