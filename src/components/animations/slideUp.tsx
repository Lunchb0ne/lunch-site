import React from 'react';
import { MotionProps, motion } from 'framer-motion';
import { styled } from '@/lib/stitches';

export const StyledMotionText = styled(motion.h1, {
  lineHeight: '1.75rem',
  maxWidth: '10rem',
  fontFamily: 'Righteous',
});

type Props = {
  children: React.ReactNode;
  variants?: MotionProps['variants'];
  allowDrag?: boolean;
};

const fadeUp: MotionProps['variants'] = {
  init: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: [null, 1, 1],
    y: [null, -5, 0],
    transition: {
      bounce: 1,
      type: 'spring',
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  hover: {
    y: [null, 6],
    transition: { repeatType: 'reverse', repeat: Infinity, type: 'spring' },
  },
};

const SlideUp: React.FC<Props> = ({
  children,
  variants = fadeUp,
  allowDrag = false,
}) => {
  return (
    <>
      <StyledMotionText
        drag={allowDrag}
        variants={variants}
        whileHover="hover"
        dragConstraints={{ bottom: 0, top: 0, left: 0, right: 0 }}
        initial="init"
        animate="show"
        css={{
          dropShadow: '$lg',
        }}
      >
        {children}
      </StyledMotionText>
    </>
  );
};

export default SlideUp;
