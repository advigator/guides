const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  experimental: {
    scrollRestoration: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://dashboard.advigator.com/en/guides',
        permanent: true,
      },

      {
        source: '/extension/seo',
        destination: 'https://dashboard.advigator.com/en/guides',
        permanent: true,
      },

      {
        source: '/docs/targeting',
        destination: 'https://dashboard.advigator.com/en/guides/18/targeting',
        permanent: true,
      },

      {
        source: '/extension/images',
        destination: 'https://dashboard.advigator.com/en/guides/36/images',
        permanent: true,
      },

      {
        source: '/extension/export',
        destination: 'https://dashboard.advigator.com/en/guides/48/export',
        permanent: true,
      },

      {
        source: '/extension/keywords',
        destination: 'https://dashboard.advigator.com/en/guides/38/keywords',
        permanent: true,
      },

      {
        source: '/extension/charts',
        destination: 'https://dashboard.advigator.com/en/guides/46/charts',
        permanent: true,
      },

      {
        source: '/extension/price',
        destination: 'https://dashboard.advigator.com/en/guides/44/price',
        permanent: true,
      },

      {
        source: '/extension/marketshare',
        destination: 'https://dashboard.advigator.com/en/guides/42/brands',
        permanent: true,
      },

      {
        source: '/docs/getting-started/connect',
        destination: 'https://dashboard.advigator.com/en/guides/1/connect-amazon-ads',
        permanent: true,
      },

      {
        source: '/extension',
        destination: 'https://dashboard.advigator.com/en/guides/32/install-chrome-extension',
        permanent: true,
      },

    ]
  },

}

module.exports = withMarkdoc()(nextConfig)
