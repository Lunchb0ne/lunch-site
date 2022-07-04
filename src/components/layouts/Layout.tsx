import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      Youre Wrapped in Layout
      {children}
      Layout End
    </div>
  );
};

export const getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export { Layout };
