import React, { Children, useRef } from 'react';
import { Box, Flexbox } from '../layout';
import { motion } from 'framer-motion';
import { Text } from '@/components/elements';
import { StyledCard } from './styles';

type Props = {
  Icon: string;
};

export const Card: React.FC<Props> = ({ Icon }) => {
  const dragRef = useRef(null);
  return (
    <StyledCard>
      <Flexbox ref={dragRef} justifyContent css={{ height: '100%' }}>
        <Box
          drag
          dragConstraints={dragRef}
          as={motion.img}
          src={Icon}
          css={{ height: '6rem', m: 'auto', color: '$fgMain' }}
        />

        {/* </Box> */}
      </Flexbox>
    </StyledCard>
  );
};
