// https://nextjs.org/docs/advanced-features/custom-app
//nprogress module
import 'nprogress/nprogress.css';

import { ReactElement } from 'react';

import { NextComponentType, NextPageContext } from 'next';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Head } from '@/components/next';
import { darkTheme, theme } from '@/lib/stitches';
import { ComponentWithLayout } from '@/types/utils';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  Component: ComponentWithLayout<P> & { theme: string };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <ThemeProvider
        attribute="class"
        value={{
          light: theme.className,
          dark: darkTheme.className,
        }}
      >
        <Head />
        {getLayout(<Component {...pageProps} />, pageProps)}
      </ThemeProvider>
    </>
  );
}
