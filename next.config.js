/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'images.ctfassets.net'],
  },
  i18n: {
    locales: ['en-US', 'nl-NL'],
    defaultLocale: 'en-US',
  }
};
