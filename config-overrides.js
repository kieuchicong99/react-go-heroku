const { override, useEslintRc } = require('customize-cra');
const path = require('path');
module.exports = {
  webpack: override(useEslintRc(path.resolve(__dirname, '.eslintrc.js'))),
};
