var _          = require('lodash')
  , config     = require('./config')
  , files      = require('./files')
  , webpack    = require('./webpack')
  , plugins    = require('./karma_plugins');

plugins.push('karma-webpack');

var opts = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine'].concat(config.get('frameworks')),


  // list of files / patterns to load in the browser
  files: files,


  // list of files to exclude
  exclude: config.get('exclude'),


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: webpack.preprocessors,


  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['story', 'progress'],

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,

  webpack: webpack.config,

  webpackMiddleware: webpack.middleware,
  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['PhantomJS'],


  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,

  // Concurrency level
  // how many browser should be started simultanous
  // concurrency: Infinity
  plugins: plugins
}

module.exports = opts;