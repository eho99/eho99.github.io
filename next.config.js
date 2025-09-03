/** Next.js config for static export to GitHub Pages */
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/projects',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig
