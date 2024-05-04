/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    images: {
       remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
       ]
      },
      reactStrictMode: true,
      swcMinify: true,
}

module.exports = withContentLayer(nextConfig)
