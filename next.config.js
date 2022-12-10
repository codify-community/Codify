/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['images-ext-1.discordapp.net', 'images-ext-2.discordapp.net'],
  },
}

module.exports = nextConfig