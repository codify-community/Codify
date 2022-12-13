/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['images-ext-1.discordapp.net', 'images-ext-2.discordapp.net', 'images.wallpapersden.com', 'i0.wp.com'],
  },
}

module.exports = nextConfig