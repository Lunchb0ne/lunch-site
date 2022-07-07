// https://nextjs.org/docs/advanced-features/custom-app
//nprogress module
import 'nprogress/nprogress.css';
import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { ReactElement } from 'react';
import { NextUIProvider, globalCss } from '@nextui-org/react';
// inspx for inspecting using cmd/alt in dev
import Inspect from 'inspx';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';
import { Head } from '@/components/next';
import { darkTheme, lightTheme } from '@/config/themes';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/#dynamic-viewport
export const applyGlobalCSS = globalCss({
  body: { height: '100bvh' },
  '#__next': {
    height: '100vh',
    '& div[data-overlay-container]': {
      minHeight: '100%',
    },
  },
});

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
  applyGlobalCSS();
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Head />
          <Inspect>
            {getLayout(<Component {...pageProps} />, pageProps)}
          </Inspect>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
}
