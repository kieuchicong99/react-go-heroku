/* eslint-disable no-undef */
const { override, useEslintRc, overrideDevServer, watchAll } = require('customize-cra');
const path = require('path');
module.exports = {
  webpack: override(useEslintRc(path.resolve(__dirname, '.eslintrc.js'))),
  devServer: overrideDevServer(
    (config, env) => ({
      ...config,
      proxy: {
        '/api/v1/file': {
          target: process.env.DOMAIN_IMAGE,
          changeOrigin: true,
          pathRewrite: { '^/home': '' },
        },
        '/api': {
          target: process.env.DOMAIN,
          changeOrigin: true,
          pathRewrite: { '^/home': '' },
        },
      },
      compress: false,
    }),
    watchAll(),
  ),
};
