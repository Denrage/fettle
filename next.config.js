/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fettle' : '',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
