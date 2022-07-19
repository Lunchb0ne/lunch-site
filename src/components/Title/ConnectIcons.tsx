import { motion, MotionProps } from 'framer-motion';
import { ConnectAnchor } from './Styles';

type Props = {};
// TODO: CleanUP!!!
const ConnectIcons: React.FC<Props> = (props) => {
  const iconDim = '1.5em';
  const pathAnims: MotionProps['variants'] = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      scale: 1.1,
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const iconAnims: MotionProps['variants'] = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [40, -40, 0],
    },
    tap: { scale: 0.9 },
  };
  return (
    <>
      <ConnectAnchor
        as={motion.a}
        initial="initial"
        animate="visible"
        variants={iconAnims}
        whileHover="hover"
        whileTap="tap"
        target="_blank"
        href="https://github.com/lunchb0ne"
        rel="noreferrer"
      >
        <motion.svg
          width={iconDim}
          height={iconDim}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            variants={pathAnims}
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
          />
        </motion.svg>
      </ConnectAnchor>

      <ConnectAnchor
        as={motion.a}
        initial="initial"
        animate="visible"
        variants={iconAnims}
        whileHover="hover"
        whileTap="tap"
        href="mailto:hi@lunchb0ne.me"
      >
        <motion.svg
          width={iconDim}
          height={iconDim}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.rect
            variants={pathAnims}
            x={3}
            y={5}
            width={18}
            height={14}
            rx={2}
          />
          <motion.polyline variants={pathAnims} points="3 7 12 13 21 7" />
        </motion.svg>
      </ConnectAnchor>

      <ConnectAnchor
        as={motion.a}
        initial="initial"
        animate="visible"
        variants={iconAnims}
        whileHover="hover"
        whileTap="tap"
        target="_blank"
        href="https://www.linkedin.com/in/abhishekaryan16"
        rel="noreferrer"
      >
        <motion.svg
          width={iconDim}
          height={iconDim}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-linkedin"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.rect
            variants={pathAnims}
            x={4}
            y={4}
            width={16}
            height={16}
            rx={2}
          />
          <motion.line variants={pathAnims} x1={8} y1={11} x2={8} y2={16} />
          <motion.line variants={pathAnims} x1={8} y1={8} x2={8} y2="8.01" />
          <motion.line variants={pathAnims} x1={12} y1={16} x2={12} y2={11} />
          <motion.path variants={pathAnims} d="M16 16v-3a2 2 0 0 0 -4 0" />
        </motion.svg>
      </ConnectAnchor>
    </>
  );
};

export default ConnectIcons;
