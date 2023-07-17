/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'publications-us-en.ikea.com',
        port: '',
        pathname: '/76561/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
