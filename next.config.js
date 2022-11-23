/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const i18n = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    localeDetection: false,
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}

module.exports = nextConfig
