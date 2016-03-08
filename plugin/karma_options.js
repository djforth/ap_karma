var _          = require('lodash')
  , config     = require('./config')
  , files      = require('./files')
  , browserify = require('./browserify')
  , plugins    = require('./plugins');


var opts = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['browserify', 'jasmine'],


  // list of files / patterns to load in the browser
  files: files,


  // list of files to exclude
  exclude: [
  ],


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: browserify.preprocessors,

  browserify: browserify.browserify,

  babelPreprocessor: {
    options: {
      presets: ['es2015']
    }
  },



  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['story', 'progress'],

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,


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