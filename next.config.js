/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com', 'book-wis3.netlify.app']
  },
  pageExtensions: [
      'api.ts',
      'tsx'
  ]
}

module.exports = nextConfig
