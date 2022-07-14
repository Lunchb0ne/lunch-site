import { Button } from '../elements';
import { MotionProps, motion } from 'framer-motion';

type Props = {};

const ConnectIcons: React.FC<Props> = (props) => {
  const iconDim = '1.5em';
  const anims: Record<string, MotionProps['variants']> = {
    buttonAnims: {
      initial: {
        background: 'rgba(0,0,0,0)',
      },
      hover: {
        scale: 1.05,
        background: 'var(--colors-fgMain)',
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 0.8,
        },
      },
      tap: {
        scale: 0.9,
      },
      visible: {
        background: 'rgba(0,0,0,0)',
        scale: 1.1,
        transition: {
          duration: 1,
        },
      },
    },
    pathAnims: {
      initial: {
        opacity: 0,
        pathLength: 0,
        scale: 1,
        filter: 'none',
      },
      hover: {
        pathLength: 1,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 1.5,
        },
      },
      visible: {
        opacity: 1,
        scale: 1.1,
        pathLength: 1,
        transition: {
          duration: 1.5,
        },
      },
    },
    svgAnims: {
      initial: {
        filter: 'none',
        transition: {
          when: 'afterChildren',
          duration: 0.1,
        },
      },
      hover: {
        filter: 'invert(100%)',
        transition: {
          when: 'beforeChildren',
          duration: 0.1,
        },
      },
      visible: {
        transition: {
          when: 'afterChildren',
          duration: 0.1,
        },
      },
    },
  };
  // All the icons are copied from tabler-icons as we need
  // inline paths to animate them and using prebuilt svgs wont work properly
  return (
    <>
      <Button
        as={motion.button}
        whileHover="hover"
        whileTap="tap"
        rounded
        initial="initial"
        animate="visible"
        variants={anims.buttonAnims}
      >
        <motion.svg
          width={iconDim}
          height={iconDim}
          variants={anims.svgAnims}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="var(--colors-fgMain)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.path
            variants={anims.pathAnims}
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
          />
        </motion.svg>
      </Button>
      <Button
        as={motion.button}
        rounded
        whileHover="hover"
        whileTap="tap"
        initial="initial"
        animate="visible"
        variants={anims.buttonAnims}
      >
        <motion.svg
          width={iconDim}
          height={iconDim}
          variants={anims.svgAnims}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-linkedin"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="var(--colors-fgMain)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.rect
            variants={anims.pathAnims}
            x={4}
            y={4}
            width={16}
            height={16}
            rx={2}
          />
          <motion.line
            variants={anims.pathAnims}
            x1={8}
            y1={11}
            x2={8}
            y2={16}
          />
          <motion.line
            variants={anims.pathAnims}
            x1={8}
            y1={8}
            x2={8}
            y2="8.01"
          />
          <motion.line
            variants={anims.pathAnims}
            x1={12}
            y1={16}
            x2={12}
            y2={11}
          />
          <motion.path
            variants={anims.pathAnims}
            d="M16 16v-3a2 2 0 0 0 -4 0"
          />
        </motion.svg>
      </Button>
      <Button
        as={motion.button}
        whileHover="hover"
        whileTap="tap"
        rounded
        initial="initial"
        animate="visible"
        variants={anims.buttonAnims}
      >
        <motion.svg
          width={iconDim}
          height={iconDim}
          variants={anims.svgAnims}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="var(--colors-fgMain)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <motion.rect
            variants={anims.pathAnims}
            x={3}
            y={5}
            width={18}
            height={14}
            rx={2}
          />
          <motion.polyline variants={anims.pathAnims} points="3 7 12 13 21 7" />
        </motion.svg>
      </Button>
    </>
  );
};

export default ConnectIcons;
