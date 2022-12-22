/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['i.imgur.com', 'images-ext-1.discordapp.net', 'images-ext-2.discordapp.net', 'cdn.discordapp.com'],
  },
}

module.exports = nextConfig