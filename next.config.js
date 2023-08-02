/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'publications-us-en.ikea.com',
        port: '',
        pathname: '/76561/**',
      },
    ],
  },
}

module.exports = nextConfig
