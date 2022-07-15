import React, { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import { Box, Flexbox } from '../layout';
import { motion } from 'framer-motion';
import { StyledCard } from './styles';

type Props = {
  children?: ReactNode;
  stateHandlers: Dispatch<SetStateAction<boolean>>;
};

export const Card: React.FC<Props> = ({ children, stateHandlers }) => {
  const dragRef = useRef(null);
  return (
    <StyledCard>
      <Flexbox ref={dragRef} justifyContent css={{ height: '100%' }}>
        <Box
          dragConstraints={dragRef}
          as={motion.div}
          drag
          onDragStart={() => {
            stateHandlers(true);
          }}
          onDragEnd={() => {
            stateHandlers(false);
          }}
          css={{ size: 'auto', m: 'auto', color: '$fgMain' }}
        >
          {children}
        </Box>
      </Flexbox>
    </StyledCard>
  );
};
