let config = require('./config');

let plugins = [
  'karma-jasmine'
  , 'karma-firefox-launcher'
  , 'karma-chrome-launcher'
  , 'karma-safari-launcher'
  , 'karma-phantomjs-launcher'
  , 'karma-spec-reporter'
  , 'karma-babel-preprocessor'
  , 'karma-sourcemap-loader'
  , 'karma-webpack'
  , 'karma-coverage'
];

plugins = plugins.concat(config.get('plugins'));

module.exports = plugins;
