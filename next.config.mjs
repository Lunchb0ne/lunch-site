// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://nextjs.org/docs/basic-features/image-optimization
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['raw.githubusercontent.com'],
  },
  experimental: {
    images: { allowFutureImage: true },
    serverComponents: true,
    optimizeCss: true,
  },
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default withBundleAnalyzer(config);
