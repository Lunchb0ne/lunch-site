import createShadow from '../utils/createShadow';

const shadows = {
  sm: createShadow('small', '#000', 0.4),
  md: createShadow('medium', '#000', 0.15),
  lg: createShadow('large', '#000', 0.1),
} as const;

export default shadows;
