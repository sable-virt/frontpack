'use strict';
const frontpack = require('frontpack');

const fp = new frontpack({
  debug: false
});

const config = fp
  .preset('angular')
  .config({
    entry: {
      main: process.env.NODE_ENV === 'production' ? [
          './src/main-aot',
          './src/assets/css/style.scss'
        ] : [
          './src/main',
          './src/assets/css/style.scss'
        ]
    },
    devServer: {
      historyApiFallback: true
    }
  }).option({
    options: {
    }
  }).export();
module.exports = config;