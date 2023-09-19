// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT}/:path*`,
  //     },
  //   ]
  // },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign-in',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
