import { ReactElement } from 'react';

import { NextComponentType, NextPageContext } from 'next';

export type ComponentWithLayout<P> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getLayout?: (
    page: ReactElement,
    layoutProps: Record<string, unknown>
  ) => ReactElement;
};
