/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['i.imgur.com', 'cdn.discordapp.com'],
  },
}

module.exports = nextConfig