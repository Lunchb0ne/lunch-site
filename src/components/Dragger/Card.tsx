import React, { Children, Dispatch, SetStateAction, useRef } from 'react';
import { Box, Flexbox } from '../layout';
import { motion } from 'framer-motion';
import { Text } from '@/components/elements';
import { StyledCard } from './styles';

type Props = {
  Icon: string;
  stateHandlers: Dispatch<SetStateAction<boolean>>;
};

export const Card: React.FC<Props> = ({ Icon, stateHandlers }) => {
  const dragRef = useRef(null);
  return (
    <StyledCard>
      <Flexbox ref={dragRef} justifyContent css={{ height: '100%' }}>
        {/* Temp Change to make it okay */}
        {Icon[0] === '/' ? (
          <Box
            dragConstraints={dragRef}
            as={motion.img}
            src={Icon}
            // drag
            // onDragStart={() => {
            //   stateHandlers(true);
            // }}
            // onDragEnd={() => {
            //   stateHandlers(false);
            // }}
            css={{ height: '6rem', m: 'auto', color: '$fgMain' }}
          />
        ) : (
          <Text
            as={motion.h1}
            // onDragStart={() => {
            //   stateHandlers(true);
            // }}
            // onDragEnd={() => {
            //   stateHandlers(false);
            // }}
            // drag
            // dragConstraints={dragRef}
            css={{ height: '6rem', m: 'auto', color: '$fgMain' }}
          >
            {Icon}
          </Text>
        )}
      </Flexbox>
    </StyledCard>
  );
};
