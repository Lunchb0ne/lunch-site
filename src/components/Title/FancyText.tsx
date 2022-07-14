import SlideUp from '../animations/slideUp';
import { MotionProps, motion } from 'framer-motion';
import { Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { StyledMotionText } from './Styles';

// TODO: Cleanup this animation
const FancyText: React.FC<{}> = () => {
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
  return (
    <>
      <SlideUp variants={fadeUp}>
        <motion.div variants={fadeUp}>Abhishek</motion.div>
        <motion.div variants={fadeUp}>Aryan</motion.div>
      </SlideUp>
      <Box css={{ my: 'auto', maxWidth: '20rem', textShadow: '$soft' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <Text h4 font="$sans">
            Making software is my hobby, but breaking it is my expertise.
          </Text>
        </motion.div>
      </Box>
    </>
  );
};
export default FancyText;
