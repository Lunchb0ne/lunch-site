import { motion } from 'framer-motion';
import { styled } from '@/lib/stitches';

export const StyledMotionText = styled(motion.h1, {
  lineHeight: '1.75rem',
  maxWidth: '10rem',
  fontFamily: 'Righteous',
});

export const ConnectAnchor = styled(motion.a, {
  fontSize: '$base',
  cursor: 'pointer',
  borderRadius: '$rounded',
  textAlign: 'center',
  color: '$fgMain',
  backgroundColor: '$bgMain',
  lineHeight: 'normal',
  transition: '0.5s',
  dropShadow: '$blur',
  padding: '$4',
  '&:hover': {
    backgroundColor: '$fgMain',
    color: '$bgMain',
  },
});
