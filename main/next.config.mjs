/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000'
      }
    ]
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  }
};

export default nextConfig;
