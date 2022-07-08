import { LayoutGroup, motion } from 'framer-motion';
import { Text } from '@/components/elements';
import { Box } from '@/components/layout';
import { StyledMotionText } from './Styles';

const FancyText = () => {
  const NAME = ['Abhishek', 'Aryan'];
  const fadeUp = {
    hidden: {
      opacity: 0,
      translateY: '40px',
    },
    show: {
      opacity: 1,
      translateY: '0px',
      transition: {
        type: 'spring',
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <LayoutGroup>
      <StyledMotionText variants={fadeUp} initial="hidden" whileInView="show">
        {NAME.map((word, idx) => (
          <motion.span variants={fadeUp} key={idx}>
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
