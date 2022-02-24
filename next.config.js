const debug = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: !debug ? '/portfolio' : '',
  assetPrefix: !debug ? '/portfolio/' : '',
}

module.exports = nextConfig
