import React from 'react';

// TODO: Make this a common slide up thingy for all slideUps
type Props = {
  children: React.ReactNode;
};

const SlideUp: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default SlideUp;
