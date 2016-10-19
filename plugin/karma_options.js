
var config     = require('./config')
  , plugins    = require('./karma_plugins');

var opts = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: ''

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  , frameworks: ['jasmine'].concat(config.get('frameworks'))

  // list of files / patterns to load in the browser
  , files: config.get('externals').concat(config.get('input'))

  // list of files to exclude
  , exclude: config.get('exclude')

  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  , preprocessors: {
    [config.get('input')]: ['webpack', 'sourcemap']
  }
  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  , reporters: ['spec', 'coverage']

  , specReporter: {
    maxLogLines: 5 // limit number of lines logged per test
    , suppressErrorSummary: true  // do not print error summary
    , suppressFailed: false  // do not print information about failed tests
    , suppressPassed: false  // do not print information about passed tests
    , suppressSkipped: true  // do not print information about skipped tests
    , showSpecTiming: true // print the time elapsed for each spec
  }

  // enable / disable watching file and executing tests whenever any file changes

  , webpack: {
    // context: PATHS.src,
    devtool: 'inline-source-map'
    , plugins: [
    ]
    , externals: {
      // cheerio: 'window',
      // jsdom: 'window',
      'react/addons': true
      , 'react/lib/ExecutionEnvironment': true
      , 'react/lib/ReactContext': true
    }

    , module: {
      loaders: [{
        test: /\.js$/
        , loader: 'babel'
        // , include: PATHS.src
        , exclude: /node_modules/
        , query: {
          cacheDirectory: true
          , presets: ['airbnb']
          , plugins: ['istanbul', 'rewire']

        }
      }
      , {
        test: /\.json$/
        , loader: 'json'
      }]
    }
  }

  , webpackServer: {
    noInfo: true
  }

  , coverageReporter: {
    type: 'text-summary'
    , dir: 'coverage/'
    , instrumenterOptions: {
      istanbul: {noCompact: true}
    }
  }
  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  , browsers: ['PhantomJS']

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  , singleRun: true
  , port: 9876
  , colors: true
  , logLevel: config.LOG_INFO
  , autoWatch: true
  , autoWatchBatchDelay: 300
  // Concurrency level
  // how many browser should be started simultanous
  , concurrency: Infinity
  , plugins: plugins
};

module.exports = opts;
