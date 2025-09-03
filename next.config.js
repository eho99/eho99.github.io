/** Next.js config for static export to GitHub Pages */
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/eho99.github.io',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
