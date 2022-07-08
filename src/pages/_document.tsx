// https://stitches.dev/docs/server-side-rendering
// https://nextjs.org/docs/advanced-features/react-18/server-components#nextdocument
import { Head, Html, Main, NextScript } from 'next/document';
import { applyGlobalCSS, getCssText } from '@/lib/stitches';

const sanitizeCSS = [
  'npm/sanitize.css@latest/sanitize.min.css',
  'npm/sanitize.css@latest/system-ui.min.css',
  'npm/sanitize.css@latest/ui-monospace.min.css',
  'npm/sanitize.css@latest/typography.min.css',
  'npm/sanitize.css@latest/assets.min.css',
  'npm/sanitize.css@latest/forms.min.css',
].join(',');

export default function Document() {
  applyGlobalCSS();
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href={`https://cdn.jsdelivr.net/combine/${sanitizeCSS}`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
