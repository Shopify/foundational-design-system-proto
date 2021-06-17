const {VanillaExtractPlugin} = require('@vanilla-extract/webpack-plugin');

module.exports = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
