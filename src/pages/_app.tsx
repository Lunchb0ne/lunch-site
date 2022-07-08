// https://nextjs.org/docs/advanced-features/custom-app
//nprogress module
import 'nprogress/nprogress.css';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { ReactElement } from 'react';
// inspx for inspecting using cmd/alt in dev
import Inspect from 'inspx';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import { Head } from '@/components/next';
import { dark, light } from '@/config/themes';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// Augment Pages with Layout
type ComponentWithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (
    page: ReactElement,
    layoutProps: Record<string, unknown>
  ) => ReactElement;
};

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
          light: light,
          dark: dark,
        }}
      >
        <Head />
        <Inspect>{getLayout(<Component {...pageProps} />, pageProps)}</Inspect>
      </ThemeProvider>
    </>
  );
}
