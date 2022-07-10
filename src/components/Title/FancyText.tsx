import { LayoutGroup, MotionProps, motion } from 'framer-motion';
import { Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { StyledMotionText } from './Styles';

// TODO: Cleanup this animation
const FancyText: React.FC<{}> = () => {
  const NAME = ['Abhishek', 'Aryan'];
  const fadeUp: MotionProps['variants'] = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    normal: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 1,
      },
    },
    hover: {
      y: 6,
      transition: {
        repeatType: 'reverse',
        repeat: Infinity,
        type: 'spring',
      },
    },
  };
  return (
    <>
      {/* TODO: Move this into it's own FadeUp thing */}
      <StyledMotionText
        drag
        variants={fadeUp}
        whileHover={'hover'}
        dragConstraints={{ bottom: 0, top: 0, left: 0, right: 0 }}
        initial="hidden"
        animate="show"
        css={{
          dropShadow: '$blur',
        }}
      >
        {NAME.map((word, idx) => (
          <motion.span key={idx}>{word}&nbsp;</motion.span>
        ))}
      </StyledMotionText>
      <Box css={{ my: 'auto', maxWidth: '20rem', textShadow: '$soft' }}>
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
    </>
  );
};
export default FancyText;
