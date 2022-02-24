const debug = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? 'portfolio' : '',
}

module.exports = nextConfig
