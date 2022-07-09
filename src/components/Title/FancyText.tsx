import { LayoutGroup, MotionProps, motion } from 'framer-motion';
import { Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { StyledMotionText } from './Styles';

const FancyText: React.FC<{}> = () => {
  const NAME = ['Abhishek', 'Aryan'];
  const fadeUp: MotionProps['variants'] = {
    hidden: {
      opacity: 0,
      y: '50px',
    },
    normal: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      y: '0px',
      transition: {
        type: 'spring',
        staggerChildren: 0.4,
      },
    },
    hover: {
      x: [0, 4, 7],
      y: [0, -2, 5],
      transition: {
        repeatType: 'reverse',
        repeat: Infinity,
        duration: 2,
      },
    },
  };
  return (
    <LayoutGroup>
      <StyledMotionText
        drag
        variants={fadeUp}
        whileHover={'hover'}
        dragConstraints={{ left: 10, right: 10, bottom: 10, top: 10 }}
        initial="hidden"
        animate="show"
      >
        {NAME.map((word, idx) => (
          <motion.span key={idx} variants={fadeUp}>
            {word}&nbsp;
          </motion.span>
        ))}
      </StyledMotionText>
      <Box css={{ my: 'auto', maxWidth: '20rem' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          }}
        >
          <Text h4 font="$sans">
            Making software is my hobby, but breaking it is my expertise.
          </Text>
        </motion.div>
      </Box>
    </LayoutGroup>
  );
};
export default FancyText;
