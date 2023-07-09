/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    largePageDataBytes: 256 * 1000,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  env: {
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },
}

module.exports = nextConfig
